import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

//pages
import BlogPosts from "./pages";
import AllPosts from "./pages/allPosts";
import Post from "./pages/post";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Blog = ({ ...rest }) => {
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
      <span style={{
        marginRight: "20px"
      }}>
          Admin? <Link to='/login'>Login</Link>
        </span>
      </Footer>
    </div>
  );
};

export default Blog;
