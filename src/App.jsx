import { useState } from "react";
import { PostsForm } from "./components/PostsForm";
function App() {
  return (
    <div className="h-screen text-2x1 border-x border-gray-500 w-2/5">
    <section className="fell w-full text-lg m-2">
      <div className="w-1/2 p-2"></div>
    </section>
    <PostsForm/>

    </div>
  );
}



export default App;