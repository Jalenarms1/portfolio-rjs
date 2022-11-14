import React from 'react'
import Project from '../components/Project';

export default function PortfolioPage() {
  return (
    <>
        <div className="heading-wrap w-50 text-center mt-4 mb-3 mx-auto border-bottom">
            <h1 className="pb-2 text-warning fw-bold">Projects</h1>
        </div>

        <div id="proj-coll" class="wrap-proj-sec d-flex flex-wrap m-auto pb-5">
            <div class="mx-3 cst-wrap d-flex m-auto flex-wrap">
                <Project />
            </div>
        </div>
    </>
  )
}
