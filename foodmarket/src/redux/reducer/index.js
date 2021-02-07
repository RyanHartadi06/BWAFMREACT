import {combineReducers} from 'redux';
import {registerReducer, uploadReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  uploadReducer,
  homeReducer,
});

export default reducer;
