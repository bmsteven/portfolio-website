import React from "react";

const BlogPosts = () => {
  return (
    <div className='container'>
      <header className='blog-header'>
        <div className='left'>
          <h2>Recent posts</h2>
        </div>
        {/* <div className='right'></div> */}
      </header>
      <div className='showcase'>
        <h2>No Posts available at the moment</h2>
      </div>
    </div>
  );
};

export default BlogPosts;
