import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import StarRatings from "react-star-ratings";

export default function Package(props) {
  const { info, pop } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rating, setRating] = useState(5);

  function changeRating(newRating) {
    setRating(newRating);
    console.log(newRating);
  }

  return (
    <div className="d-flex-column justify-content-center gap-5">
      <div className="d-flex justify-content-between m-2">
        <p className="fw-bold">Package number: {info.packageNumber}</p>
        <p className="fw-bold">Price: {info.price}$</p>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src="package_delivered_transparent.webp"
          alt="delivered package"
          className="w-25 h-25 d-block"
        ></img>
      </div>
      <div className="d-flex justify-content-around">
        <Button variant="primary" onClick={handleShow} className="m-2 w-25">
          Pick up
        </Button>

        <Button variant="outline-danger" className="m-2 w-25">
          Prolong
        </Button>
      </div>
      <div className="d-flex flex-column justify-content-between m-2">
        <p className="fw-bold">PickUp Location: {info.pickUpLocation}</p>
        <p className="fw-bold">Delivery service: {info.deliveryService}</p>
      </div>
      {/* MODAL PICK UP*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm PickUp</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              pop(info.packageNumber);
            }}
            className="w-25"
          >
            Confirm
          </Button>
          <Button
            variant="outline-danger"
            onClick={handleClose}
            className="w-25"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </div>
  );
}
