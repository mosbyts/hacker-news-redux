import { NEWS_ADD, NEWS_FETCH_ERROR } from "../constants/actionTypes";

const INITIAL_STATE = {
  news: [],
  error: null,
};

 const applyAddNews = (state, action) => ({
  news: action.news,
  error: null,
});

const applyFetchErrorNews = (state, action) => ({
  news: [],
  error: action.error,
});

const articleReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case NEWS_ADD: {
      return applyAddNews(state, action);
    }
      
      case NEWS_FETCH_ERROR: {
      return applyFetchErrorNews (state, action);
    }


      default:
        return state;
    }
  };

   export default articleReducer;