import * as types from '../actions/action.type'
import { handleActions } from 'redux-actions'

const initialState = {
    files: [],
    displayFileList: [],
}

const fileReducer = handleActions({
    [types.SET_FILE_LIST]: (state, {payload: { newList } }) => {
        return {
            ...state,
            files: newList
        }
    },
    [types.SET_DISPLAY_FILE_LIST]: (state, {payload: {newList}}) => {
        console.log("---------", newList)
        return {
            ...state,
            displayFileList: newList
        }
    }
}, initialState)

export default fileReducer