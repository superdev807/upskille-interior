const IncomingForm = require('formidable').IncomingForm
const createWorker = require('tesseract.js').createWorker

async function image_recognize(file_path) {  
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(file_path);
  await worker.terminate();
  return text
}

module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.parse(req);

  form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('file', function (name, file) {
      let promise = new Promise(function(resolve, reject) {
        resolve(image_recognize(file.path))
        reject(new Error("Unknown Error"))
      })
      promise.then(
        result => {
          console.log("--------------------------")
          console.log("content of ", file.name)
          console.log(result)
          console.log("--------------------------")
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