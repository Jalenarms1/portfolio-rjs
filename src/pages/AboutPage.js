import React from 'react';
import About from '../components/About';
import {useLocation} from 'react-router-dom';


export default function HomePage() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="heading-wrap w-50 text-center mt-4 mb-3 mx-auto border-bottom">
        <h1 className="pb-4 text-warning fw-bold">About</h1>
      </div>

      <div id="proj-coll" className="wrap-proj-sec d-flex flex-wrap m-auto pb-2">
        <div className=" cst-wrap d-flex m-auto flex-wrap"> 
          <About />

        </div>
          
      </div>
    </>
  )
}
