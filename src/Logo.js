
import './App.css';
import img from './/images/logo2.png';

export function Logo(){
  

  return(
    <div className='logodiv'>
    <img src={img} className="logo" alt='noimage'/>    

  {/* <ul className='logoul' style={{float:'right'}}>
      <li className='logoli'>List Your Business</li>
      <li className='logoli'>Post a AD</li>
      <li className='logoli'><img src={vid} className="downloadlogo"  alt='blank'/>
        Download App</li>
    </ul> */}
  </div>
);
}   