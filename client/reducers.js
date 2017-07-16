/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
// Import Reducers

import reducer from './modules/Test/TestReducer';
import { paginatorReducer } from 'react-redux-paginator';


// Combine all reducers into one root reducer
export default combineReducers({
  reducer,
  paginatorReducer,
});
