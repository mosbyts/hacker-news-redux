import {
    NEWS_ADD,
    NEWS_FETCH,
    NEWS_FETCH_ERROR,
  } from '../constants/actionTypes';

 const doFetchNews = query => ({
  type: NEWS_FETCH,
  query,
});

 const doAddNews = news => ({
  type: NEWS_ADD,
  news,
});

 const doFetchErrorNews = error => ({
    type: NEWS_FETCH_ERROR,
    error,
});

export { doFetchNews, doAddNews, doFetchErrorNews };