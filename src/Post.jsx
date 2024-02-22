import PropTypes from "prop-types";

const Post = ({ author, text }) => {
  return (
    <div className="post">
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
