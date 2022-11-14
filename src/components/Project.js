import React from 'react'
import { projects } from '../data/projects'

export default function Project() {
  return (
    <>
        {projects.map(project => {
            return (
                <div class="card mx-2 cst-flex-basis my-2 bg-dark" style={{width: '15rem'}}>
                    <img src={project.imageUrl}  class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-light">{project.title}</h5>
                    </div>
                    <div class="wrap-btn d-flex flex-column p-2">
                        <a href={project.liveUrl} target="_blank" class="btn btn-warning my-1" rel='noreferrer'>Test Live</a>
                        <a href={project.githubUrl} target="_blank" class="btn btn-warning my-1" rel='noreferrer'>View code repo</a>

                    </div>
                </div>

            )
        })}
    </>
  )
}
