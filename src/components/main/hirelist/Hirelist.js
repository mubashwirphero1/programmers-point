import React from 'react';
import "./Hirelist.css"

const Hirelist = (props) => {
    const hire = props.hire;

    let totalQuantity = 0;
    let total = 0;
    for (const programmer of hire) {
        if (!programmer.quantity) {
            programmer.quantity = 1;
        }
        total = total + programmer.salary * programmer.quantity;
        totalQuantity = totalQuantity + programmer.quantity
    }
    return (
        <div className="proPoint-gradientCard-bg">
            <h3>Total Hired : <span className="text-white">{totalQuantity}</span></h3>
            <h5>Cost : <span className="text-white">${total}</span></h5>
        </div>
    );
};

export default Hirelist;