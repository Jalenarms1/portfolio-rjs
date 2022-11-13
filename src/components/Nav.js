import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'

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
                    <a className="navbar-brand text-white cst-link px-3" href="https://github.com/jalenarms1" target="_blank" rel="noreferrer">Github</a>
                    <a href="/contact" className="navbar-brand text-white cst-link px-3" data-bs-toggle="modal"  data-bs-target="#contactModal">Contact</a>
                </div>}

            </div>
        </nav>
    </>
  )
}
