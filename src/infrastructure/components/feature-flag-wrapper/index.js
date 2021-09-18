import React, { useState } from 'react';
import featureFlagsService from '../../services/featureFlagsService'

function FeatureFlagWrapper({children}) {
    const [enabledFeature, setEnabledFeature] = useState(false);

    featureFlagsService.onReady((isEnabled) => {
        if(isEnabled !== enabledFeature){
            setEnabledFeature(isEnabled);
        }
    });


    if (enabledFeature) {
        return (
            <>
             {children}
            </>
        );
    } else {
        return (<></>);
    }
    
}

export default FeatureFlagWrapper;
