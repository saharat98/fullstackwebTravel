import "./Style/Homepage.css";
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalData from "./PagesAddData";
import ModalUpdate from "./PageUpdate";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

function HomePage() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showimg, setShowimg] = useState(false);
  const handleCloseimg = () => setShowimg(false);
  const handleShowimg = () => setShowimg(true);

  // const createNotification = (type) => {
  //   return () => {
  //     NotificationManager.success("Success message", "Title here");
  //   };
  // };

  const fetchData = async () => {
    const rp = await axios.get(`http://localhost:4000/datathai`);
    setData(rp.data);
    console.log(rp.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="Buttonstyle">
            <Button
              style={{ backgroundColor: "#fff8", color: "black" }}
              onClick={handleShow}
            >
              ADD
            </Button>
          </div>
          <div>
            <Form.Select aria-label="Default select example">
              <option>Select Region</option>
              <option value="1">ภาคกลาง</option>
              <option value="2">ภาคเหนือ</option>
              <option value="3">ภาคใต้</option>
              <option value="4">ภาคอีสาน</option>
            </Form.Select>
          </div>
          <div className="box-1">
            {data.map((val, id) => {
              return (
                <div className="box-2" key={id}>
                  <div className="boxImg" onClick={handleShowimg}>
                    <img
                      src={val.ImageURL}
                      alt={val.NameT}
                      style={{ width: "100%", height: "100%" }}
                    ></img>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <span className="span-detail">{val.NameT}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalData show={show} onHide={handleClose} />
      <ModalUpdate show={showimg} onHide={handleCloseimg} />
    </>
  );
}

export default HomePage;
