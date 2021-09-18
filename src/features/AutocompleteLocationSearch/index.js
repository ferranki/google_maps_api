import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    addAddress,
} from './slice';
import AutocompleteLocationSearchInputComponent from '../../infrastructure/components/autocomplete-location-search-input';
import FeatureFlagWrapper from '../../infrastructure/components/feature-flag-wrapper';
import featureFlagsService from '../../infrastructure/services/featureFlagsService';

function AutocompleteLocationSearchFeature() {
    const [enabledFeature, setEnabledFeature] = useState(false);

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
