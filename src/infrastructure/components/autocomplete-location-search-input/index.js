import React, { useState, useEffect } from 'react';
import './index.scss';

import getPlacePredictions from '../../services/autoCompleteLocationService'

function AutocompleteLocationSearchInputComponent() {

    const [address, setAddress] = useState("");
    const [predictions, setPredictions] = useState([]);

    const handleChange = async event => {
        setAddress(event.target.value)
        const predictionsSearch = await getPlacePredictions(event.target.value);
        setPredictions(predictionsSearch);
    };

    const handleSelect = addressValue => {
        console.log("handleSelect", addressValue);
    };

    useEffect(() => {
        console.log("test");
    }, [predictions]);

    return (
        <div className="autocomplete-root">
            <input onChange={handleChange} />
            <div className="autocomplete-dropdown-container">
                {predictions.map((prediction => (
                    <div className="pac-item">
                        <span className="pac-matched">{prediction.description}</span>
                    </div>
                )))}
            </div>
        </div>
    );
}

export default AutocompleteLocationSearchInputComponent;