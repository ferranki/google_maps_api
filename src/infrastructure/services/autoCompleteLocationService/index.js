async function getPlacePredictions(value) {

    if(!value || value === ""){
        return []
    }

    const service = new window.google.maps.places.AutocompleteService();
    const predictionsResults = await service.getPlacePredictions({ input: value });
    console.log(predictionsResults);

    return predictionsResults.predictions;

}

export default getPlacePredictions;