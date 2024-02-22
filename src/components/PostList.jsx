import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="vinoth" text="React is Awesome" />
        <Post author="samar" text="Learn React Course" />
      </ul>
    </>
  );
};

export default PostList;
