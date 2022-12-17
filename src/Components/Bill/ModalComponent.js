import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalComponent({selectedItems,showModalComponent,total}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    if(showModalComponent){
     setShow(true);
    }
  },[showModalComponent])

  console.log("showmodal"+show);
  return (
    <>

      <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        {selectedItems && selectedItems.map((item)=>( 
            <>
              <div class="row">
                <b>{item.name}</b>
            </div>
            <div class="row">
                <b>{item.price}</b>
            </div>
            <hr style={{border: "1px solid red"}}/></>
          
        ))}
        <div class="row">
            <div class="col-8">
               <b>Total Amount</b> 
                </div>
                <div class="col-4">
               <b >${total}</b> 
                </div>
                </div>
   </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}