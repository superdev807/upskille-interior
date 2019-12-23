import { combineReducers } from 'redux';
import fileReducer from './fileList';

const rootReducer = combineReducers({
    fileState: fileReducer
});

export default rootReducer;