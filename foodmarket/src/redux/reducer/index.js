import {combineReducers} from 'redux';
import {registerReducer, uploadReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {orderReducer} from './order';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  uploadReducer,
  homeReducer,
  orderReducer,
});

export default reducer;
