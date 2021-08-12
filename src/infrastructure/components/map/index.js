import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './index.scss';
import { selectMarkersAddresses } from '../../../features/AutocompleteLocationSearch/slice';
import getCoordinatesByPlaceId from '../../services/geoCoderLocationService';

let map;

function MapComponent() {

    const markers = useSelector(selectMarkersAddresses);

    const initMap = () => {
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
            disableDefaultUI: true,
        });
        const drawingManager = new window.google.maps.drawing.DrawingManager({
            drawingControl: false,
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
    }

    function addMarker(location, map) {
        new window.google.maps.Marker({
            position: location,
            map: map,
        });
    }

    const getCoordinatesAndAddMarker = async () => {
        const location = await getCoordinatesByPlaceId(markers[markers.length - 1].place_id);
        addMarker(location, map);
        map.setCenter(location);
    }

    useEffect(() => {
        initMap();
    }, []);

    useEffect(() => {
        if (markers.length > 0) {
            getCoordinatesAndAddMarker();
        }
    }, [markers]);

    return (
        <div id="map"></div>
    );
}

export default MapComponent;
