import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer';
import listReducer from './listReducer';

export default combineReducers({
  listReducer,
  itemsReducer
})