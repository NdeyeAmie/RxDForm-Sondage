import axios from 'axios';
import React,{ useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import axios from "../api/axios";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async(event) => {
    event.preventDefault();
    console.log(email,password);
    try {
      await axios.post('http://localhost:8000/api/users/login',{email,password})
      setEmail("");
      setPassword("")
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
     <h2 className='h2'>page Login</h2>
      <div className="mainlog">
     <div className="sub-main"> 
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src="assets/a.png" alt="a" className="profile"/>
           </div>
         </div>
         <div>
          <div className='h1'>
           <h1>Login</h1>
           </div>
            <form onSubmit={handleLogin}>
           <div className='fisrt-input'>
             <img src="assets/email.jpg" alt="email" className="email"/>
             <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
               placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src="assets/pass.png" alt="pass" className="email"/>
             <input type="password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder="********"
             className="name"/>
           </div>
          <div className="login-button">
          <button type='sumit' className='logbutton'>Login</button>
          </div>
           </form>
            <div className="link">
              <p>Vous n'avez pas de compte ?</p>
               <NavLink to="/register">Sign Up</NavLink>
            </div>
         </div>
       </div>
     </div>
    </div>
    </>
  )
}
export default Login;
