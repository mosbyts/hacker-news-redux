import articleReducer from './Article';
import { NEWS_ADD } from '../constants/actionTypes';

 describe('ArticleReducer', () => {
  it('adds news to the next state', () => {
    const news = ['a', 'b', 'c'];
     const action = {
      type: 'NEWS_ADD',
      news,
    };

    const previousState = { news: [], error: null };
    const expectedState = { news, error: null };
    const newState = articleReducer(previousState, action);
     expect(newState).toEqual(expectedState);
  });
});