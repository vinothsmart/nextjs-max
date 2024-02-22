import PropTypes from "prop-types";
import classes from "./Post.module.css";

const Post = ({ author, text }) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
