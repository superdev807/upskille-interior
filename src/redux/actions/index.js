import * as types from '../actions/action.type'
import { createActions } from 'redux-actions'

export const {
    setFileList,
    setDisplayFileList
} = createActions({
    [types.SET_FILE_LIST]: (newList) => ({ newList }),
    [types.SET_DISPLAY_FILE_LIST]: (newList) => {
        return { newList }
    },
})