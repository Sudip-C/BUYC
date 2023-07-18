import { Link as NavLink } from "react-router-dom"
import "../CSS/Login.css"
export default function Login() {
  return (
    <div className="container">
        <h1>Login into your account</h1>
        <form className="Loginform">
        <input placeholder="Enter your email"/>
        <input placeholder="Enter your password"/>
        <input type="submit"/>
        <p>Don't have account? <NavLink style={{textDecoration:"none",color:"blue"}} to="/signup">Register Now</NavLink></p>
        </form>
    </div>
  )
}
