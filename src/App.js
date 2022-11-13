import './App.css';
import Header from './components/Header';
import {HashRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>  
      <div className='contain-all'>
        <Header />
        <HashRouter>
          <Nav />
          <div className="proj-container d-flex flex-column justify-content-center rounded">
            
              <Routes>
                <Route path='/' element={<AboutPage />} />
              </Routes>
          </div>
        </HashRouter>
        <Footer />
      </div>

    </>
  );
}

export default App;
