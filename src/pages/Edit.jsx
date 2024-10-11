import React from 'react'


function Edit() {

  
  return (
    <>
    <div>
        <h1 className='text-info text-center'>Edit Contact</h1>
    </div>
    <div className='d-flex justify-content-center align-items-center'>
    <div className=''>
    <form action="">
            <input type="text" className="form-control border border-dark border-shadow mb-3" placeholder='Name' />
            <input type="text" className="form-control border border-dark border-shadow mb-3" placeholder='Number' />
            <input type="email" className="form-control border border-dark border-shadow mb-3" placeholder='Email' />
            <input type="text" className="form-control border border-dark border-shadow mb-3" placeholder='ImageUrl' />
        </form>
        <button className='btn btn-warning'>Save Updates</button>
   </div>   
    </div>

    </>
  )
}

export default Edit