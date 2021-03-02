import { combineReducers } from 'redux';
import serviceWorkerReducer from './serviceWorkerReducer';

export default combineReducers({
  serviceWorker: serviceWorkerReducer,
});
