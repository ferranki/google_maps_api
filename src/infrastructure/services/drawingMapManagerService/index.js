
let map;

export const initMap = ({ mapElementId, initOptions, canDraw = false }) => {

    if (!mapElementId) {
        throw new Error('Missing mapElementId');
    }

    if (!initOptions) {
        throw new Error('Missing initOptions');
    }

    map = new window.google.maps.Map(mapElementId, initOptions);

    const drawingManager = new window.google.maps.drawing.DrawingManager({
        drawingControl: canDraw,
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });
    drawingManager.setMap(map);

    return map;
}

export const centerMap = (location) => {
    if (!location) {
        throw new Error('Missing location');
    }

    map.setCenter(location);
}

