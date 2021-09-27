// Importing all necessary files
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Programmers.css"

const Programmers = (props) => {
    const { picture, name, passion, country, age, salary } = props.singleProgrammer;
    return (
        <div className="proPoint-text-success proPoint-card-bg fw-bold">
            <img className="mx-auto d-block rounded-circle" src={picture} alt="User_pic" />
            <h4 className="text-center mt-2">Name    : {name}</h4>
            <p>Passion : {passion}</p>
            <p>Age     : {age}</p>
            <p>Country : {country}</p>
            <p>Salary  : ${salary}</p>
            <button onClick={() => props.handleHiring(props.singleProgrammer)} className="btn btn-danger my-2 d-block mx-auto"><i className="fab fa-hire-a-helper"></i> Hire Now</button>
        </div>
    );
};

export default Programmers;