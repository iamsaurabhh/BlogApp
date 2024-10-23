import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
import CreateBlog from "./Components/CreateBlog"
import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateBlog />} />

    </Routes>
    
    </BrowserRouter>
    
    
    
    
    </>
  )
}