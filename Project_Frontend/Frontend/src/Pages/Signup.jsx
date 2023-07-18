import { Link as NavLink } from "react-router-dom"
import "../CSS/Login.css"
export default function Login() {
  return (
    <div className="container">
        <h1>Signup for new account</h1>
        <form className="Loginform">
        <input placeholder="Enter your name" type="text"/>
        <input placeholder="Enter your email" type="email"/>
        <input placeholder="Enter your password" type="password"/>
        <input type="submit"/>
        <p>Already have account? <NavLink style={{textDecoration:"none",color:"blue"}} to="/login">Login Now</NavLink></p>
        </form>
    </div>
  )
}
