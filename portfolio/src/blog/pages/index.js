import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/all";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BlogPosts = ({ data: { posts, loading, error } }) => {
  const [keyWord, setKeyWord] = useState("All");

  const setAll = () => {
    setKeyWord("All");
  };

  const setSocial = () => {
    setKeyWord("Social");
  };

  const setCareer = () => {
    setKeyWord("Career");
  };

  const setTechnology = () => {
    setKeyWord("Technology");
  };

  let filteredPosts;

  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  }, []);
  if (posts) {
    filteredPosts = posts.filter((o) => o.category.includes(keyWord));
  }

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
        <div className='keywords'>
          <nav>
            <ul>
              <li onClick={setAll}>All</li>
              <li onClick={setTechnology}>Technology</li>
              <li onClick={setSocial}>Social</li>
              <li onClick={setCareer}>Career</li>
            </ul>
          </nav>
        </div>
        {loading ? (
          <h2>loading... please wait</h2>
        ) : (
          <>
            {filteredPosts && filteredPosts.length > 0 ? (
              <>
                {filteredPosts.slice(0, 10).map((post) => (
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
              <div className='no-content'>
                {error && <h2>{error.error}</h2>}
                {!error && <h2>No Posts available at the moment</h2>}
              </div>
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
