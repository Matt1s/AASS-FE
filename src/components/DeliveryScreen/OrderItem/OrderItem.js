import react from "react";

import {Button} from "react-bootstrap";

function OrderItem(props) {
    return (
        <tr className="order-item">
            <td className="order-id">XXX-XXX-XXX</td>
            <td className="order-box-id">XXX-XXX-XXX</td>
            <td className="order-due-date">DD.MM.YYYY</td>
            <td className="order-status">Status</td>
            <td className="order-actions">
                <Button variant="primary" size="sm">Deliver to box</Button>
            </td>
        </tr>
    );
}

export default OrderItem;
