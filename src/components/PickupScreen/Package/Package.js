import { Button } from "react-bootstrap";

export default function Package() {
  return (
    <div>
      <div className="d-flex justify-content-between m-2">
        <p>Package number: 123456789</p>
        <p>Price: 14.99$</p>
      </div>

      <div className="d-flex gap-5">
        <Button variant="primary" className="m-2">
          Pick up
        </Button>

        <Button variant="primary" className="m-2">
          Prolong
        </Button>
      </div>
      <div className="d-flex justify-content-between m-2">
        <p>PickUp Location: 5kg</p>
        <p>Delivery service: 30x30x30cm</p>
      </div>
    </div>
  );
}
