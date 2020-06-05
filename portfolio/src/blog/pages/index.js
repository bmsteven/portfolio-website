import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/all";
// import dayjs from "dayjs";
// import moment from "moment"
// import Moment from "react-moment";
// import Parser from "html-react-parser";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import store from "../../redux/store";

// import { getPosts } from "../../redux/actions/index";

const BlogPosts = ({ ui: { loading }, data: { posts } }) => {
  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  }, []);

  // useEffect(() => {
  //   store.dispatch(getPosts);
  // }, [getPosts]);

  // if (posts) console.log(posts);
  // console.log(posts)
  // let fromnow = "fromNow()";

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
                      // textAlign: "center",
                    }}
                  >
                    <h1>{post.title}</h1>
                    {/* {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        style={{
                          width: "30%",
                          minWidth: "280px",
                          height: "auto",
                          background: "gray",
                        }}
                      />
                    )} */}
                    <p
                    // style={{
                    //   marginBottom: "25px",
                    // }}
                    >
                      {post.subtitle}
                    </p>
                    {/* <small
                      style={{
                        display: "block",
                        marginBottom: "15px",
                      }}
                    >
                      Posted {" "}
                      <Moment fromNow>{post.createdAt}</Moment>
                    </small> */}
                    {/* <p>{Parser(post.body)}</p> */}
                    <Link to={`/blog/${post.slug}-${post.postId}`}>
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

export default connect(mapStateToProps, { })(BlogPosts);
