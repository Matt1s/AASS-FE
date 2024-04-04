import { Button } from "react-bootstrap";

export default function Package(data) {
  const info = data.packageInfo;
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
        <Button variant="primary" className="m-2 w-25">
          Pick up
        </Button>

        <Button variant="primary" className="m-2 w-25">
          Prolong
        </Button>
      </div>
      <div className="d-flex flex-column justify-content-between m-2">
        <p className="fw-bold">PickUp Location: {info.pickUpLocation}</p>
        <p className="fw-bold">Delivery service: {info.deliveryService}</p>
      </div>
    </div>
  );
}
