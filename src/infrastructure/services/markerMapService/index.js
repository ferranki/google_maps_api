async function addMarker(location, map) {
    new window.google.maps.Marker({
        position: location,
        map: map,
    });
}

export default addMarker;