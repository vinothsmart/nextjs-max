import PropTypes from "prop-types";
const Post = ({ author, text }) => {
  return (
    <>
      <p>{author}</p>
      <p>{text}</p>
    </>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Post;
