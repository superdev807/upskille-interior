import React from 'react'
import { AppBar, Typography, Toolbar, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import classNames from 'classnames'
import * as constants from '../../constants/variables'
import { useStyles } from './theme'

export default function TopBar() {

    const classes = useStyles()
        
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
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}