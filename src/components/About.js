import React from 'react'

export default function About() {
  return (
   <>
    <div className='wrap-about'>
        <p className=' text-light p-3'>I am a full-stack developer out of Phoenix, AZ. Coding has grown to be a passion of mine. I enjoy the constant problem solving and embrace the challenges it brings</p>
        <br />
        <p className=' text-light p-3'>I hold myself to a high standard in anything that I do. I like to push myself to reach new limits and am not statisfied with anything less out of my work.</p>
        <div className='key-sills text-warning'>
            <p className='text-warning fw-bold'>Key qualities: </p>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    Consistent
                </li>
                <li>
                    Efficient
                </li>
                <li>
                   Detail-oriented
                </li>
            </ul>

        </div>
        <div className='key-sills text-warning'>
            <p className='text-warning fw-bold'>Strong suits: </p>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    React js
                </li>
                <li>
                    Node js / Express js
                </li>
                <li>
                   MongoDB
                </li>
            </ul>

        </div>
    </div>
   </>
  )
}
