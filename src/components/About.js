import React from 'react'

export default function About() {
  return (
   <>
    <div className='wrap-about'>
        <p className='about-text p-3'>I am a full-stack developer out of Phoenix, AZ. Coding has grown to be a passion of mine. I enjoy the constant problem solving and embrace the challenges it brings</p>
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
    </div>
   </>
  )
}
