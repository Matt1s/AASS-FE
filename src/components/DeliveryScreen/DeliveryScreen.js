import "./style.css";

import OrderItem from "./OrderItem/OrderItem";
import {Modal, Button} from "react-bootstrap";
import { useEffect, useState } from "react";



function DeliveryScreen() {

  // on component mount, fetch data from server
  const [packages, setPackages] = useState([]);

  const COURRIER_ID = 1;

  async function fetchPackages() {
    let response = await fetch(`http://localhost:3001/packages/${COURRIER_ID}`);
    let data = await response.json();
    setPackages(data);
  };

  /*useEffect(() => {
    fetchPackages();
  }, []);*/


  const [currentOrderId, setOrderId] = useState(0);

  const [open, setOpen] = useState(false);
   
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = (orderId) => {
      setOrderId(orderId);
      setOpen(true);
  };

  function ModalDelivery(props) {

    const [boxId, setBoxId] = useState(0);

    async function submitForm(event, packageId){

      event.preventDefault();
      console.log("Package ID: " + packageId);
      console.log("Box ID: " + boxId);

      // Send data to server
      let response = await fetch(`http://localhost:3001/package/${packageId}/${boxId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courierId: 1,
          packageId: packageId,
          boxId: boxId,
        }),
      })

      if(response.status === 200){
        alert("Package delivered successfully");
        handleClose();
      } else {
        alert("Error delivering package");
      }
    }
  
    return (
      <Modal show={open} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Vloženie balíka: {props.orderId}</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <form className="row" onSubmit={(event) => submitForm(event, props.orderId)}>
              <div className="col-6">
                <p>ID Balíkoboxu</p>
                <input name="boxId" type="number" className="form-control" onChange={(e) => setBoxId(e.target.value)}/>
              </div>
              <div className="col-6">
                <p>ID Balíka</p>
                <input name="packageId" type="number" className="form-control" value={props.orderId} disabled/>
              </div>
              <div className="col-12 p-3 d-flex justify-center align-center">
                <Button variant="primary" type="submit">Submit</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }

  return (
    <>
    <div style={{width: "100%"}}>
      <h1>Delivery Screen</h1>
      {/* Create rows with 4 columns, last columns are actions */}
      <table className="order-list">
        <tr>
          <th className="text-center">Package ID</th>
          <th>Box ID</th>
          <th>Due date</th>
          <th>Status</th>
          <th className="th-actions">Actions</th>
        </tr>
        <OrderItem boxId={null} orderId={1001} openModal={() => handleOpen(1001)}/>
        <OrderItem boxId={null} orderId={1002} openModal={() => handleOpen(1002)}/>
        <OrderItem boxId={null} orderId={1003} openModal={() => handleOpen(1003)}/>
        <OrderItem boxId={null} orderId={1004} openModal={() => handleOpen(1004)}/>
        <OrderItem boxId={null} orderId={1005} openModal={() => handleOpen(1005)}/>
        <OrderItem boxId={'TEST'} orderId={1006} openModal={() => handleOpen(1006)}/>
        <OrderItem boxId={null} orderId={1007} openModal={() => handleOpen(1007)}/>
        {packages.map((packageItem) => {
          return <OrderItem boxId={packageItem.boxId} orderId={packageItem.packageId} openModal={() => handleOpen(packageItem.packageId)}/>
        })}
      </table>
    </div>

    <ModalDelivery orderId={currentOrderId}/>
    </>
  );
}

export default DeliveryScreen;
