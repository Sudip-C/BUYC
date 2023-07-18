import { Link as NavLink } from "react-router-dom";
import "../CSS/Navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
        
       <div className="page">
       <NavLink style={{textDecoration:"none",fontWeight:"600"}} to="/"><h2 >BUYC</h2></NavLink>
       <NavLink style={{textDecoration:"none",fontWeight:"600"}} to="/" >Home</NavLink>
        <NavLink  style={{textDecoration:"none",fontWeight:"600"}} to="/usedcar">Find Used Car</NavLink>
       </div>
        <NavLink style={{textDecoration:"none",fontWeight:"600"}} to="/login">Login/Signup</NavLink>
    </div>
  )
}
