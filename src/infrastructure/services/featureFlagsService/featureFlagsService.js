import { PFClient } from '@pataflags/sdk-js';

export default class FeatureFlagService {

    constructor() {
        this.isInitalized = false;
        this.pfclient = null;
        this.initialize();
    }

    
    /**
     * @public
     */
     initialize() {
        const user = { id: 'ferranki' }
        this.pfclient = PFClient.initialize('5e881bfa-6a8b-494b-9f8e-f8b21bfe5b55', user);
        this.isInitalized = true;
    }

    /**
     * @public
     */
     onReady(onFeatureFlagReady) {

        this.pfclient.onReady(() => {
            const isEnabled = this.pfclient.isEnabled('autocomplete-search-box');
            onFeatureFlagReady(isEnabled);
        });
    }


}