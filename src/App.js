import React from 'react';
import { withStyles } from '@material-ui/core/styles'

import TopBar from './components/TopBar'
import Upload from './components/Upload'

import styles from './constants/theme'

function App(props) {
  
  const { classes } = props
  
  return (
    <div className = {classes.root}>
      <div className = {classes.appFrame}>
        <TopBar />
        <Upload />
      </div>
    </div>

  );
}

export default withStyles(styles, { withTheme: true })(App);
