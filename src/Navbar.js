import { BrowserRouter as Router ,Routes,Route,Link } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Signup } from "./Signup";
import './App.css';
import { Login } from "./Login";
import { Business } from "./components/Business";

import vid from './/images/appload.gif';
import { Download } from "./components/Download";
import { Ad } from "./components/Ad";


export function Navbar(){

    return(
        <div>  
    <Router>
      <main>
        <ul className="navdiv ul">
          <li className="ulli"><Link to="/" className="lilink">Home</Link> </li>
          <li className="ulli"><Link to="/about" className="lilink">About</Link> </li>
          <li className="ulli"><Link to="/signup" className="lilink">Signup</Link> </li>
          <li className="ulli"><Link to="/login" className="lilink" >Login</Link> </li>
        </ul>
        <ul className='logoul' style={{float:'right'}}>
      <li className='logoli'>
        <Link to="/business" className='lilinklogo'>List Your Business</Link> </li>
      <li className='logoli'>
      <Link to="/post-ad" className='lilinklogo'>Post a AD</Link></li>
      <li className='logoli'><Link to="/download-app" className='lilinklogo'>
        <img src={vid} className="downloadlogo"  alt='blank'/>
        Download App</Link></li>
    </ul>
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/signup' element ={<Signup/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/business' element ={<Business/>}/>
    <Route path='/post-ad' element ={<Ad/>}/>
    <Route path='/download-app' element ={<Download/>}/>
    
  </Routes>
    </main>
</Router>

    </div>
    );
}