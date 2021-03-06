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

  const setHow = () => {
    setKeyWord("How");
  };

  let filteredPosts;

  useEffect(() => {
    document.title = "Blog - Benedict's Portfolio";
  }, []);
  if (posts) {
    filteredPosts = posts.filter((o) => o.category.includes(keyWord));
  }

  return (
    <div className='posts-container'>
      <div className='container'>
        <header className='blog-header'>
          <div className='left'>
            <h2>Recent posts</h2>
          </div>
        </header>
        <div className='divide'>
          <article className='posts'>
            <div className='showcase'>
              {loading ? (
                <div className='loader'>
                  <h2> Loading... Please wait</h2>
                </div>
              ) : (
                <>
                  {filteredPosts && filteredPosts.length > 0 ? (
                    <>
                      {filteredPosts.slice(0, 10).map((post) => (
                        <article key={post.postId}>
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
          </article>
          <article className='categories'>
            <header className='category-header'>
              <h2>Categories</h2>
            </header>
            <div className='keywords'>
              <nav>
                <ul>
                  <li
                    onClick={setAll}
                    className={keyWord === "All" ? "active" : ""}
                  >
                    All
                  </li>
                  <li
                    onClick={setTechnology}
                    className={keyWord === "Technology" ? "active" : ""}
                  >
                    Technology
                  </li>
                  <li
                    onClick={setSocial}
                    className={keyWord === "Social" ? "active" : ""}
                  >
                    Social
                  </li>
                  <li
                    onClick={setCareer}
                    className={keyWord === "Career" ? "active" : ""}
                  >
                    Career
                  </li>
                  <li
                    onClick={setHow}
                    className={keyWord === "How" ? "active" : ""}
                  >
                    How To
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </div>
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
