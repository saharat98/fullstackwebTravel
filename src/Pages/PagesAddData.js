import { Form, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

function ModalData(props) {
  const [province, setProvince] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgURL] = useState("");

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Page Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Province</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setProvince(e.target.value)}
              >
                <option>Select Region</option>
                <option value="1">ภาคกลาง</option>
                <option value="2">ภาคเหนือ</option>
                <option value="3">ภาคใต้</option>
                <option value="4">ภาคอีสาน</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setType(e.target.value)}
              >
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

              <Form.Control onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>ImageURL</Form.Label>
              <Form.Control
                rows={3}
                onChange={(e) => setImgURL(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            ADD
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalData;
