import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContactApi } from '../services/allApi';
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { editContactApi } from '../services/allApi';



function Contacts({contact,res,viiw}) {

  const [show, setShow] = useState(false);
  const [updatedContact, setUpdatedContact] = useState({ ...contact });



  const handleDelete=async()=>{
     const result=await deleteContactApi(contact.id)
        if(result.status==200){
            toast.success("contact removed!!")
            res(result)
        }
    }
    const handleEdit = async()=>{
      const result = await editContactApi(contact.id,updatedContact)
      if (result.status==200){
        toast.success("Contact updated successfully");
        viiw()
        handleClose()
      }
      else{
        toast.error("Failed to update contact");
      }
    }

const handleClose = () => setShow(false);
const handleShow = () => {
    setUpdatedContact({ ...contact });
    setShow(true);
  }

    
    
    
    
  return (
    <>

 
    <Card style={{ width: '15rem', background:'purple' }}>
      <Card.Img variant="top" style={{height:'250px'}} src={contact.imageUrl} />
      <Card.Body>
      <Card.Title>{contact.name}</Card.Title>
        <p className='cardnumber'>{contact.number}</p>
        <p className='cardemail'>{contact.email}</p>
        <div className="d-flex justify-content-around">
            {/* <Button  className='btn btn-warning'>
                <i className="fa-solid fa-eye" />
            </Button> */}
                <Button onClick={handleShow} className='btn btn-info'>
                <i className="fa-solid fa-pen" />
                </Button>
            <Button onClick={handleDelete} className='btn btn-danger' variant='delete'>
                <i className="fa-solid fa-trash" />
                </Button>
                </div>
       </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingname" label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              value={updatedContact.name}
              onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
              placeholder="John Wick"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingnumber" label="Phone Number" className="mb-3">
            <Form.Control
              type="tel"
              value={updatedContact.number}
              onChange={(e) => setUpdatedContact({ ...updatedContact, number: e.target.value })}
              placeholder="9123546798"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingimg" label="Image URL">
            <Form.Control
              type="text"
              value={updatedContact.imageUrl}
              onChange={(e) => setUpdatedContact({ ...updatedContact, imageUrl: e.target.value })}
              placeholder="Image URL"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    
    </>
  )
}

export default Contacts