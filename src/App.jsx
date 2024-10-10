import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(["POST 1", "POST 2", "POST 3"]);
  const [post, setPost] = useState("");

  

  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmitPost = (event) => {
    event.preventDefault();
    if (post) {
      console.log({...post, post});
    }
  };

  const handleDeletePost = () => {};

  return (
    <>
      <h1>Clon twitter</h1>
      <form> {handleSubmitPost}
        <input
          type="text"
          placeholder="Escribe algo"
          value={post}
          onChange={handleInputChange}
        />
        <input type="submit" value="Postear" />
      </form>
      {post}
      <ul>
        {post.localeCompare((item,index) =>(<li>{item}</li>))}
      </ul>
    </>
  );
}

export default App;