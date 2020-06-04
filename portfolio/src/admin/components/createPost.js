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
    imageUrl: "",
  });

  const { title, subtitle, body, imageUrl } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

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
      imageUrl,
    };
    createPost(post);
  };
  return (
    <div className='create-post-component'>
      <div
        className='container'
        style={{
          maxWidth: "400px",
        }}
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
            <label htmlFor='imageUrl'>Image Url:</label>
            <input
              type='text'
              placeholder='image url'
              id='imageUrl'
              onChange={(e) => handleChange(e)}
              name='imageUrl'
            />
          </div>
          {/* <div className='field-group'>
            <label htmlFor='body'>Body:</label>
            <textarea id='body' name='body' onChange={(e) => handleChange(e)} />
          </div> */}
          <div className='field-group'>
            <label htmlFor='body'>Body:</label>
            <Editor
              id='body'
              name='body'
              apiKey='f8iq5845cqpywd23at7ax0vkhywh0wj9sd0g26963exhjema'
              initialValue={body}
              init={{
                plugins: "link image code",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright | code",
              }}
              onChange={(e) => handleEditorChange(e)}
            />
          </div>
          {errors && (
            <p className='alert error' id='alert'>
              {errors.error}
            </p>
          )}
          <div>{body}</div>
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
