import React,{useState,useEffect} from 'react'
import Contacts from './Contacts'
import { getContactApi } from '../services/allApi'

function Contactcard({result}) {
    
    const [data,setData]=useState([])
    const [resp,setResp]=useState({})
    const [view,setView]=useState([])

  useEffect(()=>{
    getData()
  },[resp,result,view])

  const getData=async()=>{
    const result=await getContactApi()
    console.log(result)
    if (result.status == 200){
      setData(result.data)
    }
  }
  
    
  return (
    <>
        
        <div className='container-fluid border border-3'>
      {
        data.length>0 ?
        <div className='row p-2 justify-content-around'>
          {data?.map(item=>(
                 <Contacts contact={item} res={setResp} viiw={setView}/>

          ))}
        </div>

        :
        <h4 className='text-danger text-center'>NO contacts</h4>
      }
    </div>

    </>
  )
}

export default Contactcard