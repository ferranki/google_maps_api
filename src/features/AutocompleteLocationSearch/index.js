import React from 'react';
import { useDispatch } from 'react-redux';
import {
    addAddress,
} from './slice';
import AutocompleteLocationSearchInputComponent from '../../infrastructure/components/autocomplete-location-search-input';
import FeatureFlagWrapper from '../../infrastructure/components/feature-flag-wrapper';

function AutocompleteLocationSearchFeature() {
    const dispatch = useDispatch();

    const onSelectedValue = address => {
        dispatch(addAddress(address))
    }

    
    return (
        <FeatureFlagWrapper>
            <AutocompleteLocationSearchInputComponent onSelectedValue={onSelectedValue} />
        </FeatureFlagWrapper>
    );
}

export default AutocompleteLocationSearchFeature;
