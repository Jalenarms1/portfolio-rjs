import React from 'react'
import { projects } from '../data/projects'

export default function Project() {
  return (
    <>
        {projects.map(project => {
            return (
                <div className="card mx-2 cst-flex-basis my-2 bg-dark" style={{width: '15rem'}}>
                    <img src={project.imageUrl}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-light">{project.title}</h5>
                    </div>
                    <div className="wrap-btn d-flex flex-column p-2">
                        <a href={project.liveUrl} target="_blank" className="btn btn-warning my-1" rel='noreferrer'>Test Live</a>
                        <a href={project.githubUrl} target="_blank" className="btn btn-warning my-1" rel='noreferrer'>View code repo</a>

                    </div>
                </div>

            )
        })}
    </>
  )
}
