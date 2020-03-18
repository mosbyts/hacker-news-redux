//Necessary dependencies and components
import React from 'react'
import { connect } from 'react-redux'
import './Article.css'

//Individual news articles component
const Article = ({ article, columns }) => {
const { title, url, author, num_comments } = article;
  return (
    <div className='Article'>
      <span style={{ width: columns.title.width }}>
        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
    </div>
  );
};

 export default connect(null, )(Article);