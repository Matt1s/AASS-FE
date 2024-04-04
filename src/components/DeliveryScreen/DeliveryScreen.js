import "./style.css";

import OrderItem from "./OrderItem/OrderItem";



function DeliveryScreen() {
  return (
    <div style={{width: "100%"}}>
      <h1>Delivery Screen</h1>
      {/* Create rows with 4 columns, last columns are actions */}
      <table className="order-list">
        <tr>
          <th>Order ID</th>
          <th>Box ID</th>
          <th>Due date</th>
          <th>Status</th>
          <th className="th-actions">Actions</th>
        </tr>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </table>
    </div>
  );
}

export default DeliveryScreen;
