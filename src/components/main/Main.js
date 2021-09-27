// Importing all necessary files
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Main.css"
import Programmers from './programmers/Programmers';
import Hirelist from './hirelist/Hirelist';

const Main = () => {
    // Using useState for store the API data
    const [programmers, setProgrammers] = useState([]);

    // Using useState to add onCLick event
    const [hire, setHire] = useState([]);

    // Using useEffect for fetch to the API
    useEffect(() => {
        fetch('./FakeAPI.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);

    // Using a function to handle event handler
    const handleHiring = (programmer) => {
        const newHired = [...hire, programmer];
        setHire(newHired);
    }

    // Return from function
    return (
        <div className="mx-2 mt-5 row">
            <div className="col-8">
                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gap-2 programmer-ui-container">
                    {
                        programmers.map(programmer => <Programmers key={programmer._id} singleProgrammer={programmer} handleHiring={handleHiring} />)
                    }
                </div>
            </div>
            <div className="col-4">
                <Hirelist hire={hire} />
            </div>
        </div>
    );
};

export default Main;