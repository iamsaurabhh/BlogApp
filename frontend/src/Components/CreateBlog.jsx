import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const CreateBlog = () => {

  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const blog = {
       title,
       description,
    };

    const response = await fetch("http://localhost:5000/post-blog",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (response.status == 200) {
      toast.success("Blog posted successfully");
      e.target.title.value = "";
      e.target.description.value = "";
      setTimeout(() => navigate("/"),2000);
      

    }else{
      alert("something went wrong")
    }


  }






  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className=" w-[60vw] mx-auto mt-10">
        <h1 className="text-2xl text-center font-bold">Create Blogs</h1>
        <form className="flex flex-col gap-3" onSubmit={postData}>
            <label  htmlFor="title" className="font-semibold text-lg">Title:</label>
            <input type="text" name="title" placeholder="Enter the blog title" className="px-3 py-2 rounded-md outline-none border-2 border-gray-300" />
     
            <label htmlFor="description" className="font-semibold text-lg">Description:</label>
           <textarea  name="description" id="" className="px-3 py-2 rounded-md outline-none border-2 border-gray-300" rows={10}></textarea>
        
        <button type="submit" className="bg-purple-400 hover:bg-purple-800 py-3 rounded-md text-white text-xl font-bold">Post</button>
        </form>

    </div>

    </>
  )
}

export default CreateBlog