import React from 'react'

export default function About() {
  return (
   <>
    <div className='wrap-about'>
        <div className='wrap-text'>
            <p className='text-light'>I am a full-stack developer out of Phoenix, AZ. Coding has grown to be a passion of mine. I enjoy the constant problem solving and embrace the challenges it brings</p>
            <p className='text-light'>I hold myself to a high standard in anything that I do. I like to push myself to reach new limits and am not statisfied with anything less out of my work.</p>

        </div>
        <div className='all-skills-wrap'>

            <div className='key-sills text-warning'>
                <div className='cst-card'>
                    <div className='card-title d-flex justify-content-center cst-cTitle p-2 bg-warning text-dark'>
                        <h3 className='fw-bold '>Key qualities</h3>
                    </div>
                    <div className='card-body cst-cBody text-dark p-2'>
                        <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                            <li className='p-2 w-100 bg-light'>
                                Consistent
                            </li>
                            <li className='p-2 w-100 bg-light'>
                                Efficient
                            </li>
                            <li className='p-2 w-100 bg-light'>
                            Detail-oriented
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
            <div className='key-sills text-warning'>
                <div className='cst-card bg-warning'>
                    <div className='card-title d-flex justify-content-center rounded cst-cTitle p-2 bg-warning text-dark'>
                        <h3 className='fw-bold'>Strong suits </h3>
                    </div>
                    <div className='card-body cst-cBody text-dark p-2'>
                        <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                            <li className='p-2 w-100 bg-light cst-li'>
                                React js
                            </li>
                            <li className='p-2 w-100 bg-light cst-li'>
                                Node js / Express js
                            </li>
                            <li className='p-2 w-100 bg-light cst-li'>
                                MongoDB / Mongoose
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
            
        </div>
    </div>
   </>
  )
}
