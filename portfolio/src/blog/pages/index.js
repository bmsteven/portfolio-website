import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/all";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BlogPosts = ({ ui: { loading }, data: { posts } }) => {
  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  }, []);

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
          <h2>loading... please wait</h2>
        ) : (
          <>
            {posts && posts.length > 0 ? (
              <>
                {posts.map((post) => (
                  <article
                    key={post.postId}
                    style={{
                      borderBottom: "1px solid lightgray",
                      margin: "20px 0",
                      padding: "20px 0",
                    }}
                  >
                    <h1>{post.title}</h1>
                    <p>{post.subtitle}</p>
                    <Link to={`/blog/${post.slug}?postId=${post.postId}`}>
                      Read More <FaArrowRight className='icon' />
                    </Link>
                  </article>
                ))}
              </>
            ) : (
              <h2>No Posts available at the moment</h2>
            )}
          </>
        )}
      </div>
    </div>
  );
};

BlogPosts.propTypes = {
  ui: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  data: state.data,
});

export default connect(mapStateToProps, {})(BlogPosts);
