import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    addAddress,
} from './slice';
import AutocompleteLocationSearchInputComponent from '../../infrastructure/components/autocomplete-location-search-input';
import featureFlagsService from '../../infrastructure/services/featureFlagsService'

function AutocompleteLocationSearchFeature() {
    const [enabledFeature, setEnabledFeature] = useState(false);

    const dispatch = useDispatch();

    const onSelectedValue = address => {
        dispatch(addAddress(address))
    }

    featureFlagsService.onReady((isEnabled) => {
        if(isEnabled != enabledFeature){
            setEnabledFeature(isEnabled);
        }
    });


    if (enabledFeature) {
        return (
            <AutocompleteLocationSearchInputComponent onSelectedValue={onSelectedValue} />
        );
    } else {
        return (<></>);
    }
    
}

export default AutocompleteLocationSearchFeature;
