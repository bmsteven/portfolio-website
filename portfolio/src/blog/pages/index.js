import React, { useEffect } from "react";

const BlogPosts = () => {
  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  });
  return (
    <div className='container'>
      <header className='blog-header'>
        <div className='left'>
          <h2>Recent posts</h2>
        </div>
        {/* <div className='right'></div> */}
      </header>
      <div className='showcase' style={{
        textAlign: "left"
      }}>
        <h2>No Posts available at the moment</h2>
      </div>
    </div>
  );
};

export default BlogPosts;
