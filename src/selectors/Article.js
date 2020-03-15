const fetchNewsArticles = ({ articleState }) =>
  articleState.news;

const getFetchError = ({ articleState }) => articleState.error;

export { fetchNewsArticles, getFetchError };