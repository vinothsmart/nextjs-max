const names = ["vinothkanna", "samarjithraja"];

const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <>
      <h1>Hi {chosenName}</h1>
      <h1>React is Awesome</h1>
      <h2>It is a JavaScript library</h2>
    </>
  );
};

export default Post;
