import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  }

  console.log();
  return (
    <>
        <nav className="navbar navbar-expand nav-bg mb-5">
            <div className="container-fluid d-flex flex-column">
                <button onClick={toggleNav} className='d-flex flex-column cst-nav p-1 align-items-center justify-content-center mb-2'>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                    <span className='border-bottom border-dark border-2 w-100 my-1'></span>
                </button>
                {showNav && <div className='wrap-nav-options d-flex flex-column w-100'>
                    <button className="navbar-brand text-white cst-link px-3"><Link to="/portfolio" style={{textDecoration: 'none', color: 'white', display: 'block'}}>Project Catalog</Link></button>
                    <button className="navbar-brand text-white cst-link px-3"><Link to="/contact" style={{textDecoration: 'none', color: 'white', display: 'block'}}>Contact</Link></button>
                </div>}

            </div>
        </nav>
    </>
  )
}
