import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../redux/store";

import { getPosts } from "../../redux/actions/index";

const BlogPosts = ({ getPosts, ui: { loading }, data: { posts } }) => {
  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  }, []);

  useEffect(() => {
    store.dispatch(getPosts);
  }, [getPosts]);

  // if (posts) console.log(posts);

  return (
    <div className='container'>
      <header className='blog-header'>
        <div className='left'>
          <h2>Recent posts</h2>
        </div>
      </header>
      <div
        className='showcase'
        style={{
          textAlign: "left",
        }}
      >
        {loading ? (
          <small>loading... please wait</small>
        ) : (
          <>
            {!posts ? (
              <h2>No Posts available at the moment</h2>
            ) : (
              <>
                {posts.map((post) => (
                  <article key={post.postId} style={{
                    border: "1px solid lightgray",
                    margin: "20px 0", 
                    padding: "20px"
                  }}>
                    <h1>{post.title}</h1>
                    <h2>{post.subtitle}</h2>
                    <small>{post.createdAt}</small>
                    <p>{post.body}</p>
                  </article>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

BlogPosts.propTypes = {
  ui: PropTypes.object.isRequired,
  // data: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  data: state.data,
});

export default connect(mapStateToProps, { getPosts })(BlogPosts);
