import react from "react";

import {Button} from "react-bootstrap";

function OrderItem(props) {
    return (
        <tr className="order-item">
            <td className="order-package-id">{props.orderId}</td>
            <td className="order-box-id">{props.boxId}</td>
            <td className="order-due-date">DD.MM.YYYY</td>
            <td className="order-status">Status</td>
            <td className="order-actions">
                {!props.boxId ?
                <Button variant="primary" size="sm" onClick={() => props.openModal(props.orderId)}>Deliver to box</Button>
                : null}
            </td>
        </tr>
    );
}


export default OrderItem;
