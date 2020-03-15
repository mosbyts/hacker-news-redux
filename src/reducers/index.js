import { combineReducers } from 'redux';
import articleReducer from './Article';

 const rootReducer = combineReducers({
  articleState: articleReducer,
});

 export default rootReducer;