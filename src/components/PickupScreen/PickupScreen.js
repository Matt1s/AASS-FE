import "./style.css";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Package from "./Package/Package";

function PickupScreen() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        <h1>PickUp</h1>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  <div className="d-flex gap-2 justify-justify-content-start align-items-center">
                    <p>GymBeam</p>
                    <p>123456789</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  <div className="d-flex gap-2 justify-justify-content-start align-items-center">
                    <p>Nahodsa.sk</p>
                    <p>123456789</p>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <Package />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default PickupScreen;
