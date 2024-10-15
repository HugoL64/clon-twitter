import { useState } from "react";

const PostsForm = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (post) {
      setPosts([...posts, post]);
      setPost("");
    }
  };

  const handleInputChange = (e) => {
    setPost(e.target.value);
  };

  const handleDeletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <>
 <form className="w-full">
  <div className="relative">
  <div className="fixed top-5 left-5 flex flex-col gap-4">
    
      <img
        className="w-14 h-14 rounded-full"
        src="https://i.pinimg.com/736x/7b/19/c0/7b19c0477b7684c3fa4feb67803112d8.jpg"
        alt="icon"
      />
      <img
        className="w-14 h-14 rounded-full"
        src="https://media.discordapp.net/attachments/809893272944115732/1295233609120350218/GZyourPbwAAxGHj.png?ex=670e908c&is=670d3f0c&hm=481408c5ef148d8eb90f5f241377d5bd8ae2fd069236d7ed8255445e415a6e5a&=&format=webp&quality=lossless&width=538&height=576"
        alt="icon"
      />
      <img
        className="w-14 h-14 rounded-full"
        src="https://i.redd.it/3kj8naxi8io61.jpg"
        alt="icon"
      />
       <img
        className="w-14 h-14 rounded-full"
        src="https://i.pinimg.com/736x/b7/9c/8f/b79c8fc92e998ceb26e4e7e0470e2766.jpg"
        alt="icon"
      />
    </div>
  </div>
</form>

<form className="w-full">
  <div className="relative">
    
    <div className="fixed top-5 left-20 flex flex-row gap-4 items-start">
      
     
      <div className="flex flex-col gap-2">
        {["#General", "#memes", "#games", "#Rol", "#anime"].map((tag, index) => (
          <span 
            key={index} 
            className="text-lg font-bold px-2 py-1 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</form>


      <form
        className="flex w-full justify-between items-center px-5  py-3 gap-4" //lo pone alado de la imagen
        onSubmit={handleSubmitPost} //hace que no se refresque todo
      >
        <img
         className="w-14 h-14 rounded-full" //hace que la imagen este chica y redonda 
          src="https://static.vecteezy.com/system/resources/previews/014/031/015/non_2x/black-and-white-icon-plus-sign-vector.jpg"
          alt="icon" //titulo alterno por si no aparece la imagen
        />
        <input
          className="bg-transparent focus:outline-none border-none w-full"//presentacion
          type="text" //define que es un campo de texto
          placeholder="Escribe algo en #General" //texto que aparece cuando esta vacio
          value={post}  //Valor del campo (conectado al estado)
          onChange={handleInputChange} //Función que se ejecuta cuando se escribe
        />
        <input
          className="text-lg"
          type="submit"
          value="Post"
        />
          
            
      </form>
      <section>
        {posts.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center px-5 py-3 gap-4"
          >
            <img
              className="w-14 h-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt-sw2leGGcbHnQQS7Ys53qCnLc7YDY0Rvg&s"
              alt="icon"
            />
          

            <section className="w-full text-lg">
              <span className="font-bold ">Pilo </span>
              <p>{item}</p>
            </section>
            <button
              className="text-lg bg-red-500 w-24 h-9 rounded-3xl hover:bg-red-600"
              onClick={() => handleDeletePost(index)}
            >
              Borrar
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export { PostsForm };