import { takeEvery, all } from 'redux-saga/effects';
import { NEWS_FETCH } from '../constants/actionTypes';
import { handleFetchNews } from './Article';

 function* watchAll() {
  yield all([takeEvery(NEWS_FETCH, handleFetchNews)]);
}

 export default watchAll;