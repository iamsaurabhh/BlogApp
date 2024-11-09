import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {

  const[posts,setposts] = useState([]);
  const[editPost,setEditPost] = useState(false);
  const [selectedPost,setSelectedPost] = useState(" ");
  const [title,setTitle] = useState("");
  const[description,setDescription] = useState("");

useEffect(() => {
  getPosts();
},[posts]);



  const getPosts = async () => {
    const response = await fetch("https://blogapp-eht3.onrender.com/getBlog");
    const data = await response.json();
    setposts(data.blogs);
  }


  const deletePost = async (id) => {
    const response = await fetch(`https://blogapp-eht3.onrender.com/deleteBlog/${id}`, {
      method: "DELETE",
    })

    if (response.status === 200) {
      toast.success("Post deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const updatePost = async(id) => {
    const response = await fetch(`https://blogapp-eht3.onrender.com/update-blog/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description })
    })

    if (response.status === 200) {
      toast.success("Blog updated successfully");

    }else{
      toast.error("Something went wrong");
    }

  }


  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="my-10 flex flex-col gap-5" >
    {
      posts.map((post) => {
        return (
          <div className="w-[40vw]  mx-auto p-3 rounded-md shadow-md" key={post._id}>
          <div className="flex justify-end text-lg gap-3">
          <MdDelete className="text-gray-500 hover:text-red-500 cursor-pointer hover:scale-110" onClick={() => deletePost(post._id)} />
          <MdOutlineEdit className="text-gray-500 hover:text-red-500 cursor-pointer hover:scale-110" onClick={ () => {setEditPost(!editPost); setSelectedPost(post._id) }}  />

          </div>
          <h2 className="text-lg font-bold my-2 outline-none focus:bg-gray-200" contentEditable={editPost} onInput={(e) => setTitle(e.target.innerText)}>{post.title}</h2>
          <h3 className=" text-gray-500 font-semibold gap-4 outline-none focus:bg-gray-300" contentEditable={editPost} onInput={(e) => setDescription(e.target.innerText)}>{post.description}</h3>
          <button className={`${selectedPost === post._id &&  editPost?"block": "hidden"} 
          bg-purple-400 hover:bg-purple-600 px-3 py-1 my-1 rounded-md font-bold text-white`}
          onClick={() => updatePost(post._id)}  >Save</button>
      </div>



        )
      })
    }
       
    </div>
    </>
  )
}

export default Home