import React, { useState, useEffect } from 'react';
import './index.scss';

import getPlacePredictions from '../../services/autoCompleteLocationService'
import AutocompleteLocationCellResultComponent  from '../autocomplete-location-cell-result/AutocompleteLocationCellComponent';

function AutocompleteLocationSearchInputComponent({onSelectedValue}) {

    const [predictions, setPredictions] = useState([]);

    const handleChange = async event => {
        const predictionsSearch = await getPlacePredictions(event.target.value);
        setPredictions(predictionsSearch);
    };

    const onLocationSelected = location => {
        onSelectedValue(location);
        setPredictions([])
    }

    useEffect(() => {
    }, [predictions]);

    return (
        <div className="autocomplete-root">
            <input className="searchbox" onChange={handleChange} />
            <div className="autocomplete-dropdown-container">
                {predictions.map((prediction => (
                    <AutocompleteLocationCellResultComponent prediction={prediction} onLocationSelect={onLocationSelected}/>
                )))}
            </div>
        </div>
    );
}

export default AutocompleteLocationSearchInputComponent;


