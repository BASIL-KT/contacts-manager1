import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5'>
        <h3>Home</h3>
        <Link to={'/'}>
        <i className="fa-solid fa-house" size="2xl" />
        </Link>
    </div>
    </>
  )
}

export default Footer