import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/PostPage.css';

function PostPage({ postid }) {
  const [post, setPost] = useState({
    "_id": "",
    "author": {},
    "title": "",
    "content": "", 
    "is_published": true, 
    "timestamp": "",
  });
  const [comments, setComments] = useState([]);

  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isErrorPost, setIsErrorPost] = useState(false);

  function dateFormatter(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    let newDate = new Date(date);

    return newDate.toLocaleDateString("en-GB", options)
  }

  useEffect(() => {
    setIsErrorPost(false);
    setIsLoadingPost(true);

    try {
      fetch('https://mraffia-odin-blog-api.up.railway.app/posts/' + postid)
        .then((response) => response.json())
        .then((data) => {
          setPost(data.post);
          setComments(data.comments);
          setIsLoadingPost(false);
        })
    } catch (error) {
      console.error('Error fetching post data from Blog API', error);
      setIsErrorPost(false);
    }
  }, []);

  return (
    <div className="post-container">
      {isErrorPost && <div className="error-message">Something went wrong...</div>}
      {isLoadingPost ? (
        <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="rgba(17, 45, 78, 1)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <div className="post-subcontainer">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-info">By <strong>{post.author.name}</strong> at {dateFormatter(post.timestamp)}</div>
          <hr />
          <div className="post-content">{post.content}</div>
          <hr />
          <h2 className="post-comment-heading">Comments</h2>
          <div className="comment-list-container">
            {comments.length !== 0 ? 
              comments.map((comment, i) => {
                return (
                  <div key={i} className="comment-container">
                    <div className="comment-author"><strong>{comment.author}</strong> says...</div>
                    <div className="comment-content">{comment.content}</div>
                    <div className="comment-date">{dateFormatter(comment.timestamp)}</div>
                  </div>
                )
              }) : (
              <div className="comment-absent">There are no comments on this post.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostPage;