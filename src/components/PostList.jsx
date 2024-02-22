import { useCallback, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleAuthorChange = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);

  return (
    <>
      <NewPost
        handleTextChange={handleTextChange}
        handleAuthorChange={handleAuthorChange}
      />
      <ul className={classes.posts}>
        <Post author="vinoth" text="React is Awesome" />
        <Post author="samar" text="Learn React Course" />
      </ul>
    </>
  );
};

export default PostList;
