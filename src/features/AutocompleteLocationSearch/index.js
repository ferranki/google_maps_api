import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    addAddress,
} from './slice';
import { PFClient } from '@pataflags/sdk-js';
import AutocompleteLocationSearchInputComponent from '../../infrastructure/components/autocomplete-location-search-input';


function AutocompleteLocationSearchFeature() {
    const [enabledFeature, setEnabledFeature] = useState(false);

    const user = { id: 'ferranki' }
    const pfclient = PFClient.initialize('5e881bfa-6a8b-494b-9f8e-f8b21bfe5b55', user);

    const dispatch = useDispatch();

    const onSelectedValue = address => {
        dispatch(addAddress(address))
    }

    pfclient.onReady(() => {
        const isEnabled = pfclient.isEnabled('autocomplete-search-box');
       setEnabledFeature(isEnabled);
    });

    useEffect(() => {
    }, [enabledFeature]);

    if (enabledFeature) {
        return (
            <AutocompleteLocationSearchInputComponent onSelectedValue={onSelectedValue} />
        );
    } else {
        return (<></>);
    }
    
}

export default AutocompleteLocationSearchFeature;
