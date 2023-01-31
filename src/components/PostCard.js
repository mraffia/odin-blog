import React from 'react';
import '../styles/PostCard.css';

function PostCard({ post }) {

  function shortenedTitle(title) {
    if (title.length < 30) {
      return title;
    } else {
      return title.slice(0, 30) + "...";
    }
  }

  function shortenedContent(content) {
    if (content.length < 50) {
      return content;
    } else {
      return content.slice(0, 50) + "...";
    }
  }

  return (
    <div className="card-container">
      <div className="card-content-container">
        <h3 className="card-post-title">{shortenedTitle(post.title)}</h3>
        <p className="card-post-content">{shortenedContent(post.content)}</p>
      </div>
      <div className="card-info-container">
        <div className="card-post-author">{post.author.name}</div>
        <div className="card-post-date">At {post.timestamp_formatted}</div>
      </div>
    </div>
  );
}

export default PostCard;