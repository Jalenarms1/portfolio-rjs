import React from 'react'
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
        <div className="heading-wrap w-50 text-center mt-4 mb-3 mx-auto border-bottom">
            <h1 className="pb-2 text-warning fw-bold">Contact</h1>
        </div>

        <div id="proj-coll" className="wrap-proj-sec d-flex flex-wrap m-auto pb-5 mb-3">
            <div className="cst-wrap d-flex m-auto flex-wrap"> 
                <Contact />

            </div>
        
        </div>
    </>
  )
}
