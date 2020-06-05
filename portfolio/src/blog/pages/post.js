import React, { useLayoutEffect } from "react";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/index";
import Parser from "html-react-parser";
import Moment from "react-moment";

const Post = ({ getPost, data: { post }, ui: { loading } }) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const slug = params.get("postId");
  console.log(slug);
  if (post && post.title) console.log(post.title);

  useLayoutEffect(() => {
    getPost(slug);
  }, [getPost, slug]);
  return (
    <div className='container'>
      {loading ? (
        <></>
      ) : (
        <div className='post-content'>
          {post ? (
            <div>
              <h2>{post.title}</h2>
              {post.subtitle ? <p>{post.subtitle}</p> : null}
              <small
                style={{
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Posted <Moment fromNow>{post.createdAt}</Moment>
              </small>
              <div>{Parser(post.body)}</div>
            </div>
          ) : (
            <h2>No Post found</h2>
          )}
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  // match: PropTypes.object
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui,
});

export default connect(mapStateToProps, { getPost })(Post);
