// import "./style.css";

// import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
// import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
// import Package from "./Package/Package";

// const randomData = [
//   {
//     name: "GymBeam",
//     packageNumber: 123456789,
//     price: 14.99,
//     pickUpLocation: "Bratislava Cubicon",
//     deliveryService: "Slovakia Post",
//   },
//   {
//     name: "Nahodsa.sk",
//     packageNumber: 145789123,
//     price: 25.99,
//     pickUpLocation: "Aupark Bratislava",
//     deliveryService: "GLS",
//   },
// ];

// function PickupScreen() {
//   return (
//     <div
//       style={{
//         width: "100%",
//       }}
//     >
//       <div>
//         <h1>PickUp</h1>
//       </div>

//       <div
//         style={{
//           width: "100%",
//         }}
//       >
//         <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
//           <Row>
//             <Col sm={4}>
//               <ListGroup>
//                 <ListGroup.Item action href="#link1">
//                   <div className="d-flex gap-2 justify-justify-content-start align-items-center">
//                     <p>GymBeam</p>
//                     <p>123456789</p>
//                   </div>
//                 </ListGroup.Item>
//                 <ListGroup.Item action href="#link2">
//                   <div className="d-flex gap-2 justify-justify-content-start align-items-center">
//                     <p>Nahodsa.sk</p>
//                     <p>123456789</p>
//                   </div>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>
//             <Col sm={8}>
//               <Tab.Content>
//                 <Tab.Pane eventKey="#link1">
//                   <Package data="" />
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
//               </Tab.Content>
//             </Col>
//           </Row>
//         </Tab.Container>
//       </div>
//     </div>
//   );
// }

// export default PickupScreen;

import React, { useState } from "react";
import "./style.css";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Package from "./Package/Package";

const randomData = [
  {
    name: "GymBeam",
    packageNumber: 123456789,
    price: 14.99,
    pickUpLocation: "Bratislava Cubicon",
    deliveryService: "Slovakia Post",
  },
  {
    name: "Nahodsa.sk",
    packageNumber: 145789123,
    price: 25.99,
    pickUpLocation: "Aupark Bratislava",
    deliveryService: "GLS",
  },
];

function PickupScreen() {
  const [activeKey, setActiveKey] = useState("#link0");

  const handleSelect = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        <h1>Ready To PickUp</h1>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey={activeKey}
        >
          <Row>
            <Col sm={4}>
              <ListGroup>
                {randomData.map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    href={`#link${index}`}
                    onClick={() => handleSelect(`#link${index}`)}
                  >
                    <div className="d-flex gap-2 justify-content-start align-items-center">
                      <p>{item.name}</p>
                      <p>{item.packageNumber}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {randomData.map((item, index) => (
                  <Tab.Pane key={index} eventKey={`#link${index}`}>
                    <Package packageInfo={item} />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default PickupScreen;
