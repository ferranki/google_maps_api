import React, { useState, useEffect, Suspense } from 'react';
import './index.scss';
import autocompleteLocationService from '../../services/autoCompleteLocationService'

const AutocompleteLocationCellResultComponent = React.lazy(() => import('../autocomplete-location-cell-result/AutocompleteLocationCellComponent'));

function AutocompleteLocationSearchInputComponent({ onSelectedValue }) {

    const [predictions, setPredictions] = useState([]);

    const handleChange = async event => {
        const predictionsSearch = await autocompleteLocationService.getPlacePredictions(event.target.value);
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
            <input data-cy="searchbox" className="searchbox" onChange={handleChange} />
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className="autocomplete-dropdown-container">
                    {predictions.map((prediction => (
                        <AutocompleteLocationCellResultComponent key={prediction.description} prediction={prediction} onLocationSelect={onLocationSelected} />
                    )))}
                </div>
            </Suspense>
        </div>
    );
}

export default AutocompleteLocationSearchInputComponent;


