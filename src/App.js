import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'

import TopBar from './components/TopBar'
import Upload from './components/Upload'
import GridView from './components/GridView'

import {
  setFileList,
  setDisplayFileList
} from './redux/actions'

import styles from './constants/theme'

function App(props) {
  
  const { classes, files, setFileList, displayList, setDisplayFileList } = props
  
  return (
    <div className = {classes.root}>
      <div className = {classes.appFrame}>
        <TopBar setDisplayFileList = {setDisplayFileList} />
        <Upload files = {files} setFileList = {setFileList} />
        <GridView displayList = {displayList}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: state.fileState.files,
  displayList: state.fileState.displayFileList
})

const mapDispatchToProps = {
  setFileList,
  setDisplayFileList  
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withStyles(styles, { withTheme: true })(compose(withConnect)(App));