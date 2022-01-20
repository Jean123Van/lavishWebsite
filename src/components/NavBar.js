import React, {useState, useEffect} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import {MdThumbsUpDown} from 'react-icons/md'
import {FaBars, FaWindowClose} from 'react-icons/fa'


function NavBar () {

    const[bars, setBars] = useState(true);
    const[click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    const handleBars = () => {
        if (window.innerWidth <= 500){
            setBars(true);
        } else {
            setBars(false)
            setClick(true);
        }
    }
    window.addEventListener('resize',handleBars);

    useEffect(()=>handleBars(),[]);

    return (
        <div className ='container'>
            <div className ='container1'>
                <Link to ='/' className='logo'>
                    <MdThumbsUpDown className='image'/>
                    <h1>LAVISH</h1>
                </Link>
                {bars ? 
                    <div className='menu' onClick={handleClick}> 
                        {click ? <FaBars className='menu-icon'/> : <FaWindowClose className='menu-icon'/>} 
                    </div> : 
                    null}
                <div className ={!click ? 'buttons' : 'buttons inactive'}>
                    <Link to ='/' onClick={handleClick}>Home</Link>
                    <Link to = '/services' onClick={handleClick}>Services</Link>
                    <Link to ='/products' onClick={handleClick}>Products</Link>
                    <Link to ='/sign-up' onClick={handleClick}><button className ='signup'>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;