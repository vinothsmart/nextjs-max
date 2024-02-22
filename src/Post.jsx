import PropTypes from "prop-types";
import classes from "./Post.module.css";

const Post = ({ author, text }) => {
  return (
    <div className={classes.post}>
      <p>{author}</p>
      <p>{text}</p>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
