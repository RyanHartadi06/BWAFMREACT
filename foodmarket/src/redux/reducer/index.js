import {combineReducers} from 'redux';
import {registerReducer, uploadReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  uploadReducer,
});

export default reducer;
