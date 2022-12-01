import './App.css';
import Header from './components/Header';
import {HashRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <>  
      <div className='contain-all'>
        <HashRouter>
          <Header />
          <div className="proj-container d-flex flex-column justify-content-center rounded">
            
              <Routes>
                <Route path='/' element={<PortfolioPage />} />
                <Route path='/contact' element={<ContactPage />} />
                
              </Routes>
          </div>
        </HashRouter>
        <Footer />
      </div>

    </>
  );
}

export default App;
