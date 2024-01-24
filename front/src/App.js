import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
      
      <BrowserRouter>
      <>
       <Navbar/>
      <Home/> 
      <Routes>
      {/* <Route index element={<Home/>} />
      <Route index element={<Navbar/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>  
      </>
</BrowserRouter>
  
    
  );
}

export default App;
