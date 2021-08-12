const predictionsKeyValue = [];

function hasCache(key) {
    return predictionsKeyValue[key];
}

async function getPlacePredictions(value) {

    if (!value || value === "") {
        return []
    }

    if (hasCache(value)) {
        return predictionsKeyValue[value];
    }

    const service = new window.google.maps.places.AutocompleteService();
    const predictionsResults = await service.getPlacePredictions({ input: value });
    const predictions = predictionsResults.predictions

    predictionsKeyValue[value] = predictions;

    return predictions;

}

export default getPlacePredictions;