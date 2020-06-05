import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/index";
import Parser from "html-react-parser";
import Moment from "react-moment";

const Post = ({ getPost, data: { post, error, loading } }) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const slug = params.get("postId");
  if (post && post.title) console.log(post.title);

  useLayoutEffect(() => {
    getPost(slug);
  }, [getPost, slug]);

  useLayoutEffect(() => {
    if (post && post.title) {
      document.title = `${post.title} - Benedict's Blog`;
    } else {
      document.title = "Loading";
    }
  });
  return (
    <div
      className='container'
      style={{
        textAlign: "left",
      }}
    >
      {loading ? (
        <h2>Loading post... Please wait</h2>
      ) : (
        <div className='post-content'>
          {post ? (
            <div>
              <h2>{post.title}</h2>
              {post.subtitle && <p>{post.subtitle}</p>}
              {post.author && <small>by {post.author},</small>}
              <small
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Posted <Moment fromNow>{post.createdAt}</Moment>
              </small>
              <div
                style={{
                  margin: "20px 0 30px",
                }}
              >
                {Parser(post.body)}
              </div>
              {post.category && (
                <p>
                  Category:{" "}
                  <span
                    style={{
                      color: "#0684B4",
                    }}
                  >
                    {post.category[1]}
                  </span>
                </p>
              )}
              {post.keywords && (
                <>
                  <p
                    style={{
                      margin: "20px 0",
                    }}
                  >
                    Keywords:{" "}
                  </p>
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    {post.keywords.map((keyword, index) => (
                      <li
                        key={index}
                        style={{
                          marginRight: "10px",
                          listStyle: "none",
                          color: "#0684B4",
                        }}
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <div className='no-content'>
              {error && <h2>{error.error}</h2>}
              {!error && <h2>Post not found</h2>}
              <Link to='/blog'>View Recent Posts</Link>
              <Link to='/blog/all-posts'>View All Posts</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPost })(Post);
