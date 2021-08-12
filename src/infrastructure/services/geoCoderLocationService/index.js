const coordinatesKeyValue = [];

function hasCache(key) {
    return coordinatesKeyValue[key];
}


async function getCoordinatesByPlaceId(placeId) {

    if (hasCache(placeId)) {
        return coordinatesKeyValue[placeId];
    }

    const geocoder = new window.google.maps.Geocoder();
    const coordinatesResult = await geocoder.geocode({ placeId: placeId });
    const location = coordinatesResult.results[0].geometry.location;

    coordinatesKeyValue[placeId] = location

    return location;
}

export default getCoordinatesByPlaceId;