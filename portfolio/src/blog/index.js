import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//pages
import BlogPosts from "./pages";
import AllPosts from "./pages/allPosts";
import Post from "./pages/post";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Blog = ({ auth: { isAuthenticated }, ...rest }) => {
  let { path } = useRouteMatch();
  return (
    <div className='page blog-content'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <Switch>
          <Route exact path={`${path}`} key='projects'>
            <BlogPosts />
          </Route>
          <Route exact path={`${path}/all-posts`} key='projects'>
            <AllPosts />
          </Route>
          <Route path={`${path}/:post`}>
            <Post />
          </Route>
        </Switch>
      </main>
      <Footer>
        <span
          style={{
            marginRight: "20px",
          }}
        >
          {isAuthenticated ? (
            <>
              <Link to='/admin'>Admin Panel</Link>
            </>
          ) : (
            <>
              Admin? <Link to='/login'>Login</Link>
            </>
          )}
        </span>
      </Footer>
    </div>
  );
};

Blog.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Blog);
