import React, {useState} from 'react'
import{Button,Modal,InputGroup,FormControl} from 'react-bootstrap';

function Add() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
    <FormControl
      placeholder="Give a Title"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
    <FormControl
      placeholder="Give a Brief Description"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">PosterURL</InputGroup.Text>
    <FormControl
      placeholder="Give an image URL"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
    <FormControl
      placeholder="Give a Rate"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  };
  
export default Add
