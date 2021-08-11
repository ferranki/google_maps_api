const predictionsKeyValue = [];

async function getPlacePredictions(value) {

    if(!value || value === ""){
        return []
    }

    if(predictionsKeyValue[value]){
        return predictionsKeyValue[value];
    }

    const service = new window.google.maps.places.AutocompleteService();
    const predictionsResults = await service.getPlacePredictions({ input: value });
    console.log(predictionsResults);
    
    predictionsKeyValue[value] = predictionsResults.predictions;

    return predictionsResults.predictions;

}

export default getPlacePredictions;