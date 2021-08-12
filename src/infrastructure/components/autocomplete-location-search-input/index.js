import React, { useState, useEffect, Suspense } from 'react';
import './index.scss';
import getPlacePredictions from '../../services/autoCompleteLocationService'

const AutocompleteLocationCellResultComponent = React.lazy(() => import('../autocomplete-location-cell-result/AutocompleteLocationCellComponent'));

function AutocompleteLocationSearchInputComponent({ onSelectedValue }) {

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
            <Suspense fallback={<h1>Loading app...</h1>}>
                <div className="autocomplete-dropdown-container">
                    {predictions.map((prediction => (
                        <AutocompleteLocationCellResultComponent prediction={prediction} onLocationSelect={onLocationSelected} />
                    )))}
                </div>
            </Suspense>
        </div>
    );
}

export default AutocompleteLocationSearchInputComponent;


