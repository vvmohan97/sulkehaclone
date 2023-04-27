import {Link} from "react-router-dom";
import './App.css';
import './about.css';
import img1 from './/images/home.jpg';
import img2 from './/images/jobtrainingdivhome.jpg';
import img3 from './/images/distanceeducationdivhome.jpg';
import img4 from './/images/overseaseducationdivhome.jpg';
import img5 from './/images/domestichelpservices.jpg';
import img6 from './/images/homeservices.jpg';
import img7 from './/images/furnituredealers.jpg';
import img8 from './/images/packersmovers.jpg';
export function Home(){
    
    return(
    <>
    <div className='homebg'>
    <div className='subdivhome'>
     <div className='searchhome '> 
     <h1 className="homequote">Fast,Free Way to get Experts.</h1><br/>  
        <select>
        <option value={"Coimbatore"}>Coimbatore</option>
        <option value={"Chennai"}>Chennai</option>
        <option value={"Salem"}>Salem</option>
        <option value={"Tiruppur"}>Tiruppur</option>
        <option value={"Madurai"}>Madurai</option>
        </select>
        <input type={'text'} className='searchbox' placeholder="Search for Service"/>
        <button className='searchbtn'><Link to='/signup' className="linksearch">Get Experts</Link></button>
        <div className="homesidediv">
            <p className="sidehomedivtext">We are proud to launch</p>
            <h2 className="sidehomedivtext">CapShine</h2><hr/>
            <p className="sidehomedivtext">Live Learning<br/>Platform</p>
        </div>
        </div></div>
    </div>
    <div className="d-flex flex-row mb-3">
            <div className="userdiv"><h2>30+ M</h2> 
            <p>Happy Users</p></div>
            <div className="userdiv"><h2>200+ K</h2>
            <p>Verified Experts</p></div>
            <div className="userdiv"><h2>200+</h2>
            <p>Categories</p></div>
    </div>
    <div><h1 className="h1smalldiv">Education and Training</h1>
    <div className="d-flex flex-row mb-3">
    <div className="edudiv">
        <img src={img1} alt=""/>
        <p>Entrance Exam Coaching</p>
        <p>6327 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img2} alt=""/>
        <p>Job training</p>
        <p>1668 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img3} alt=""/>
        <p>Distance Education</p>
        <p>974 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img4} alt=""/>
        <p>Overseas Education</p>
        <p>550 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    </div>
    </div>


    <div><h1 className="h1smalldiv">Home  Services</h1>
    <div className="d-flex flex-row mb-3">
    <div className="edudiv">
        <img src={img5} alt=""/>
        <p>Domestic Services</p>
        <p>501 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img6} alt=""/>
        <p>Home Appliances Repair & Services</p>
        <p>874 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img7} alt=""/>
        <p>Furniture Dealers</p>
        <p>314 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    <div className="edudiv">
        <img src={img8} alt=""/>
        <p>Packers and Movers</p>
        <p>1970 Experts</p>
        <button className="edubtn">Get Quotes</button>
    </div>
    </div>
    </div>
</>
);
}