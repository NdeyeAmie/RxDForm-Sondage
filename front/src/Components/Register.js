/* eslint-disable no-unused-vars */
import React,{ useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import Loading from './Loading';
import Message from './Message';
import { register } from '../redux/actions/userAction';
import { useSelector , useDispatch } from 'react-redux';

 function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;


  const handleRegister = async(event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("le mot de passe ne correspond pas");
    } else {
      dispatch(register(name, email, password));
      navigate("/");
    }
    // console.log(name,email,password);
    // try {
    //   await axios.post('http://localhost:8000/api/users/register',{name,email,password,confirmPassword})
    //   setName("");
    //   setEmail("");
    //   setPassword("");
    //   setConfirmPassword("")
    //   navigate("/")
    // } catch (e) {
    //   console.log(e);
    // }
  }
  return (
    <>
    <h2 className='h2'>page Sign Up</h2>
      <div className="mainlog">
     
     <div className="submain"> 
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src="assets/a.png" alt="a" className="profile"/>

           </div>


         </div>
         <div>
          <div className='h1'>
           <h1>Sign Up</h1>
           </div>
           {error && <Message variant="danger">{error}</Message>}
          {loading && <Loading />}
          {message && <Message variant="danger">{message}</Message>}
           <form onSubmit={handleRegister}>
           <div className='fisrt-input'>
             <img src="assets/email.jpg" alt="name" className="email"/>
             <input type="text"
             value={name}
             onChange={(e) => setName(e.target.value)} 
              placeholder="name" className="name"/>
           </div>
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
           <div className="second-input">
             <img src="assets/pass.png" alt="pass" className="email"/>
             <input type="Confirmepassword"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             placeholder="********"
             className="name"/>
           </div>
          <div className="login-button">
          
          <button type='submit' className='logbutton'>Sign Up</button>
       
          </div>
          </form>
            <div className="link">
              <p>Vous avez déjà un compte ?</p>
               <NavLink to="/login">Login</NavLink>
            </div>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </>
  )
}
export default Register;
