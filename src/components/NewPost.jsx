import PropTypes from "prop-types";
import classes from "./NewPost.module.css";

function NewPost({ handleTextChange, handleAuthorChange }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleTextChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthorChange} />
      </p>
    </form>
  );
}

NewPost.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
};

export default NewPost;
