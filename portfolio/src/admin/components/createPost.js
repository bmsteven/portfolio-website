import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createPost } from "../../redux/actions/index";

const CreatePost = ({ createPost, ui: { loading, errors, message } }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    body: "",
    category: "",
    author: "",
    slug: "",
    keywords: [],
  });

  const { title, subtitle, body, category, author, slug, keywords } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleKeywordsChange = (e) => {};

  const handleEditorChange = (e) => {
    setFormData({ ...formData, body: e.target.getContent() });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      title,
      subtitle,
      body,
      category,
      author,
      keywords,
      slug,
    };
    createPost(post);
  };
  return (
    <div
      className='create-post-component'
      style={{
        marginBottom: "30px",
      }}
    >
      <div
        className='container'
        style={
          {
            // maxWidth: "400px",
          }
        }
      >
        <header className='primary-header'>
          <span></span>
          <h2>Create Post</h2>
        </header>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='field-group'>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              placeholder='Title'
              id='title'
              name='title'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='field-group'>
            <label htmlFor='subtitle'>Subtitle:</label>
            <input
              type='text'
              placeholder='Subtitle'
              id='subtitle'
              name='subtitle'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='field-group'>
            {/* will change this to select tag */}
            <label htmlFor='author'>Author:</label>
            <input
              type='text'
              placeholder='Author'
              id='author'
              onChange={(e) => handleChange(e)}
              name='author'
            />
          </div>
          <div className='field-group'>
            {/* will change this to select tag */}
            <label htmlFor='category'>Category:</label>
            <input
              type='text'
              placeholder='Category'
              id='category'
              onChange={(e) => handleChange(e)}
              name='category'
            />
          </div>
          <div className='field-group'>
            {/* will change this to select tag */}
            <label htmlFor='slug'>Slug:</label>
            <input
              type='text'
              placeholder='slug'
              id='slug'
              onChange={(e) => handleChange(e)}
              name='slug'
            />
          </div>
          <div className='field-group'>
            {/* will change this to select tag */}
            <h2>Keywords</h2>
            <div>
              <input
                type='checkbox'
                id='technology'
                value='Technology'
                onChange={(e) => handleKeywordsChange(e)}
                name='keywords'
              />{" "}
              <label htmlFor='technology'>Technology</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                value='Javascript'
                onChange={(e) => handleKeywordsChange(e)}
                name='keywords'
              />{" "}
              <label htmlFor='javascript'>Javascript</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='web'
                value='Web'
                onChange={(e) => handleKeywordsChange(e)}
                name='keywords'
              />{" "}
              <label htmlFor='web'>Web</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='react'
                value='React'
                onChange={(e) => handleKeywordsChange(e)}
                name='keywords'
              />{" "}
              <label htmlFor='react'>React</label>
            </div>
          </div>
          <div className='field-group'>
            <label htmlFor='body'>Body:</label>
            <Editor
              id='body'
              name='body'
              apiKey='f8iq5845cqpywd23at7ax0vkhywh0wj9sd0g26963exhjema'
              initialValue={body}
              init={{
                plugins:
                  "a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker",
                toolbar:
                  "undo redo a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table",
                toolbar_mode: "floating",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
              }}
              onChange={(e) => handleEditorChange(e)}
            />
          </div>
          {errors && (
            <p className='alert error' id='alert'>
              {errors.error}
            </p>
          )}
          {message && (
            <p className='alert success' id='alert'>
              {message.message}
            </p>
          )}
          <button type='submit' className='btn btn-primary' disabled={loading}>
            <span>{loading ? "Posting..." : "Post"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  ui: PropTypes.object.isRequired,
  createPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps, { createPost })(CreatePost);
