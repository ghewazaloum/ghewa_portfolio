import {  useState } from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';
function Navbar(){
    const [isopen,setIsopen] = useState(false)
    function widthResizer(){
        var width = window.innerWidth
        if ( width>600){
            document.querySelector(".sub-menu-wrap").style.display = "none";
        }
      } 
    window.addEventListener('resize', widthResizer)
    const clickHamburgar=()=>{
        if (isopen===false && window.innerWidth<=600){
            document.querySelector(".sub-menu-wrap").style.display = "block";
            setIsopen(true);
            console.log(window.innerWidth,isopen);
        }
        else if(isopen===true && window.innerWidth<=600){
            document.querySelector(".sub-menu-wrap").style.display = "none";
            setIsopen(false);
            console.log(window.innerWidth,isopen);
        }
        else{
            document.querySelector(".sub-menu-wrap").style.display = "none";
            setIsopen(false);
            console.log(window.innerWidth,isopen);
        }
    }
    const clickItem=()=>{
        document.querySelector(".sub-menu-wrap").style.display = "none";

    }

    return(
        <div className="nav">
            <h1 className="logo">
               <span>p</span>ortfolio
            </h1>
            <ul className='inlineUl'>
                <li><Link to="1" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="2" smooth={true} duration={600}>Skills</Link></li>
                <li><Link to="3" smooth={true} duration={700} offset={-50}>education</Link></li>
                <li><Link to="4" smooth={true}duration={800} >Work</Link></li>
            </ul>
           <svg onClick={()=>{clickHamburgar()}}  className='hamburgar' viewBox="0 0 122.88 95.95" width="20px" height="20px">
            <path className="st0" d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"/>
            </svg>
            <div className='sub-menu-wrap'>
                    <div className='sub-menu'>
                        <Link to="1" smooth={true} duration={500} onClick={()=>{clickItem()}}>Home</Link>
                        <Link to="2" smooth={true} duration={600} onClick={()=>{clickItem()}}>skills</Link>
                        <Link to="3" smooth={true} duration={700} offset={-50} onClick={()=>{clickItem()}}>education</Link>
                        <Link to="4" smooth={true}duration={800} onClick={()=>{clickItem()}}>Work</Link>  
                    </div> 
            </div>
        </div>
    );


}
export default Navbar