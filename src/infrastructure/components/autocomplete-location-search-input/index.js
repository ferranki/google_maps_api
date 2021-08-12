import React, { useState, useEffect } from 'react';
import './index.scss';

import getPlacePredictions from '../../services/autoCompleteLocationService'
import { AutocompleteLocationCellResultComponent } from '../autocomplete-location-cell-result/AutocompleteLocationCellComponent';

function AutocompleteLocationSearchInputComponent() {

    const [predictions, setPredictions] = useState([]);

    const handleChange = async event => {
        const predictionsSearch = await getPlacePredictions(event.target.value);
        setPredictions(predictionsSearch);
    };

    useEffect(() => {
        console.log("test");
    }, [predictions]);

    return (
        <div className="autocomplete-root">
            <input className="searchbox" onChange={handleChange} />
            <div className="autocomplete-dropdown-container">
                {predictions.map((prediction => (
                    AutocompleteLocationCellResultComponent(prediction)
                )))}
            </div>
        </div>
    );
}

export default AutocompleteLocationSearchInputComponent;


