import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  console.log(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const activeLinkStyle = (path) => {
    return {
        backgroundColor: location.pathname === path ? 'grey' : ''
    }
  }

  const nestedActiveLink = (path) => {
    return {
        textDecoration: 'none', 
        color: location.pathname === path ? '#c9c9c9' : 'white', 
        display: 'block'
    }
  }


  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
        setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  console.log();
  return (
    <>
        <nav className="navbar navbar-expand nav-bg mb-5 mt-3">
            <div className="container-fluid flex-query">
                <button onClick={toggleNav} className='cst-nav p-1 mb-2'>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                </button>
                {(showNav || windowWidth > 644) && <div className='wrap-nav-options w-100'>
                    <button className="navbar-brand cst-link px-3" style={activeLinkStyle('/')}><Link to="/" style={nestedActiveLink('/')}>Projects</Link></button>
                    <button className="navbar-brand cst-link px-3" style={activeLinkStyle('/portfolio')}><Link to="/about" style={nestedActiveLink('/portfolio')}>About</Link></button>
                    <button className="navbar-brand cst-link px-3" style={activeLinkStyle('/contact')}><Link to="/contact" style={nestedActiveLink('/contact')}>Contact</Link></button>
                </div>}

            </div>
        </nav>
    </>
  )
}
