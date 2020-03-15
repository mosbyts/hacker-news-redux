//Necessary dependencies and components
import React from 'react'
import { connect } from 'react-redux'
import { fetchNewsArticles, getFetchError } from '../selectors/Article'
import './News.css'
import Article from './Article'

//Container holding news articles with columns
const COLUMNS = {
  title: {
    label: "Title",
    width: "50%",
  },
  author: {
    label: "Author",
    width: "30%",
  },
  comments: {
    label: "Comments",
    width: "20%",
  }
};

 const NewsHeader = ({ columns }) => (
  <div className="News-Header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

 const News = ({ news, error }) => (
  <div className="News">
   {error && (
      <p className="error">{`ERROR: Please try again.`}></p>
    )}
    <NewsHeader columns={COLUMNS} />
    {(news || []).map(article => (
      <Article key={article.objectID} article={article} columns={COLUMNS} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  news: fetchNewsArticles(state),
  error: getFetchError(state),
});

 export default connect(mapStateToProps)(News);
