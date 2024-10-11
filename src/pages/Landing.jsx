import React,{useState} from 'react'
import Add from '../components/Add'
import Contactcard from '../components/Contactcard'

function Landing() {

    const [result,setResult]=useState({})
  return (
    <>
    
    <div className="d-flex align-items-center justify-content-center">
        <h2 className='text-success'>Add New Contact</h2>
        <Add setresult={setResult}/>
    </div>
    <div className="d-flex align-items-center justify-content-center">
        <Contactcard result={result}/>
    </div>
    </>
  )
}

export default Landing