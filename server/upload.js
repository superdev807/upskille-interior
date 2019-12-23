const IncomingForm = require('formidable').IncomingForm
const createWorker = require('tesseract.js').createWorker
const algoliasearch = require('algoliasearch')

require('dotenv').config()

async function image_recognize(file_path) {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(file_path);
  await worker.terminate();
  return text
}

const client = algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY);
const algoliIndex = client.initIndex('Upskille_DB')

const upload = (req, res) => {
  var form = new IncomingForm()

  form.parse(req);

  form.on('fileBegin', function (name, file) {
    file.path = './public/uploads/' + file.name;
  });

  form.on('file', function (name, file) {
      let promise = new Promise(function(resolve, reject) {
        resolve(image_recognize(file.path))
        reject(new Error("Unknown Error"))
      })
      promise.then(
        result => {
          algoliIndex.addObject({
            fileName: file.name,
            content: result
          }, function(err, content) {
            if ( err ) {
              console.log("algolia search error", err)
            }
          })
        },
        error => {
          console.log("--------------------------")
          console.log("------error occured-------", error)
          console.log(file.name)
          console.log("--------------------------")
        }
      )
      // console.log('Uploaded ' + file.path);
  });

  res.json()
}

const imgSearch = (req, res) => {
  const { query } = req.params
  algoliIndex.search({query: query}).then(function(response) {
    res.status(200).json( {result: response.hits} )
  })
}

module.exports = {
  upload,
  imgSearch
}