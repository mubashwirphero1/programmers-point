import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <h1 className="custom-info text-center">Programmers point</h1>
            <h3 className="text-center fw-bold custom-yellow"><span className="curly-font">Hire</span> the best programmer</h3>
        </div>
    );
};

export default Header;