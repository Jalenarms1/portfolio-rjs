import './App.css';
import Header from './components/Header';
import {HashRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <>  
      <div className='contain-all'>
        <Header />
        <div className="proj-container d-flex flex-column justify-content-center rounded">
          
          <HashRouter>
            <Routes>
              <Route path='/' element={<AboutPage />} />
            </Routes>
          </HashRouter>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
