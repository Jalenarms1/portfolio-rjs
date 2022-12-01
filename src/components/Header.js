import '../App.css';
import Nav from './Nav';
import { useLocation, Link } from 'react-router-dom';

export default function Header () {
    // const linkStyle = {
    //     textDecoration: 'none',
    //     padding: "20px",
    //     display: 'block',
    //     borderRadius: '5px'
    // }
    const location = useLocation();

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


    return (
        <>
            <div className="mb-5 py-2 wrap-name d-flex justify-content-between align-items-start w-100">
                <div className="wrap-details details-bg px-3 py-2">
                    <h1 className="fw-bold">Jalen Arms</h1>
                    <h4 className="fw-bold">Full-Stack Software Developer.</h4>

                </div>
                
                <div className='d-flex w-50 justify-content-end'>
                    <button className="mx-2 cst-link px-3 py-1" style={activeLinkStyle('/')}><Link to="/" style={nestedActiveLink('/')}>Projects</Link></button>
                    <button className="mx-2 cst-link px-3 py-1" style={activeLinkStyle('/about')}><Link to="/about" style={nestedActiveLink('/portfolio')}>About</Link></button>
                    <button className="mx-2 cst-link px-3 py-1" style={activeLinkStyle('/contact')}><Link to="/contact" style={nestedActiveLink('/contact')}>Contact</Link></button>
                </div>
                
                
                

            
            </div>
           
        </>
    )
}