import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../services/allApi';
import { toast } from 'react-toastify';


function Add({setresult}) {


    const [show, setShow] = useState(false);
  const [contact,setContact] = useState({
    name:"",number:"",email:"",imageUrl:""
  })

  const handleAdd=async()=>{
    console.log(contact)
    const {name,number,email,imageUrl}=contact
    if(!name || !number || !email || !imageUrl ){
      toast.warning("Enter valid input")
    }
    else{
      const result=await addContactApi(contact)
      if(result.status==201){
        toast.success("Contact added")
        setContact({
          name:"",number:"",email:"",imageUrl:""
        })
        handleClose()
        setresult(result)
      }
      else{
        toast.error("Failed")
        console.log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <button className='btn btn-success'onClick={handleShow}>
    <i className="fa-solid fa-circle-plus" style={{color: "#030707",}} />
    </button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingname"  label="name"  className="mb-3" >
        <Form.Control type="text" onChange={(e)=>{setContact({...contact,name:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingnumber" label="number">
        <Form.Control type="text" onChange={(e)=>{setContact({...contact,number:e.target.value})}} placeholder="Enter a number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingemail" label="email" className='mt-3'>
        <Form.Control type="email" onChange={(e)=>{setContact({...contact,email:e.target.value})}} placeholder="Enter Email ID" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingimg" label="imageUrl" className='mt-3'>
        <Form.Control type="text" onChange={(e)=>{setContact({...contact,imageUrl:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
  
    </>
  )
}

export default Add