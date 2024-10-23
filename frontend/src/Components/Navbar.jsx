import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-500 text-white py-3  gap-8 text-2xl font-bold shadow-md">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
    </nav>
  )
}

export default Navbar