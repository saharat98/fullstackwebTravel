import { Form, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";


function ModalUpdate(props) {
    const [province, setProvince] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imgurl, setImgURL] = useState("");
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Page Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Province</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Region</option>
                <option value="1">ภาคกลาง</option>
                <option value="2">ภาคเหนือ</option>
                <option value="3">ภาคใต้</option>
                <option value="4">ภาคอีสาน</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Region</option>
                <option value="1">ภาคกลาง</option>
                <option value="2">ภาคเหนือ</option>
                <option value="3">ภาคใต้</option>
                <option value="4">ภาคอีสาน</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>ImageURL</Form.Label>
              <Form.Control rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Update
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Delete
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdate;
