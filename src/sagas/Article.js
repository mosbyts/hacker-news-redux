import { call, put } from 'redux-saga/effects';
import { doAddNews, doFetchErrorNews } from '../actions/Article';
import { fetchNews } from '../api/Article';

 function* handleFetchNews(action) {
  const { query } = action;
  
  try {
    const result = yield call(fetchNews, query);
    yield put(doAddNews(result.hits));
  } catch (error) {
    yield put(doFetchErrorNews(error));
  }

}
 export { handleFetchNews };