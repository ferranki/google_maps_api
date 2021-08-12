import React from 'react';
import { useDispatch } from 'react-redux';
import {
    addAddress,
} from './slice';
import AutocompleteLocationSearchInputComponent from '../../infrastructure/components/autocomplete-location-search-input';

function AutocompleteLocationSearchFeature() {
    const dispatch = useDispatch();

    const onSelectedValue = address => {
        console.log("onSelectedValue", address)
        dispatch(addAddress(address))
    }

    return (
        <AutocompleteLocationSearchInputComponent onSelectedValue={onSelectedValue} />
    );
}

export default AutocompleteLocationSearchFeature;
