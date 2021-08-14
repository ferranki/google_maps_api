const predictionsKeyValue = [];


export default class AutocompleteLocationService {

    constructor(autocompleteService) {
        this.autocompleteService = autocompleteService;
    }

    /**
     * @public
     */
    async getPlacePredictions(textInput) {
        if (!textInput || textInput === "") {
            return []
        }

        if (this.hasCache(textInput)) {
            return predictionsKeyValue[textInput];
        }


        const predictionsResults = await this.autocompleteService.getPlacePredictions({ input: textInput });
        const predictions = predictionsResults.predictions;

        predictionsKeyValue[textInput] = predictions;

        return predictions;
    }

    /**
     * @private
     */
     hasCache(key) {
        return predictionsKeyValue[key];
    }

}