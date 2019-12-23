import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import classNames from 'classnames'
import * as constants from '../../constants/variables'
import { useStyles } from './theme'

export default function TopBar(props) {

    const classes = useStyles()

    const [query, setQuery] = useState('')

    const applyQuery = () => {
        let xhr = new XMLHttpRequest()
        const { setDisplayFileList } = props

        xhr.addEventListener('load', () => {
            const { result } = JSON.parse(xhr.response)
            const newFileList = []

            result.map((value) => (
                newFileList.push(value.fileName)
            ))
            setDisplayFileList(newFileList)
        })

        xhr.open('GET', `http://localhost:8000/img/${query}`, true)
        xhr.send(null)
    }

    const keyEventHandler = (e) => {
        if ( e.keyCode === 13 ) {
            applyQuery()
        } else {
            setQuery(e.target.value)
        }
    }
        
    return (
        <AppBar className={classNames(classes.appBar)}>
            <Toolbar disableGutters={true}>
                <Typography
                    className={classes.flexGrow}
                    align="left"
                    variant="h6"
                    component="h6"
                    color="inherit"
                    noWrap
                >
                    { constants.HEADER_TITLE }
                </Typography>
                
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyDown = { keyEventHandler }
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}