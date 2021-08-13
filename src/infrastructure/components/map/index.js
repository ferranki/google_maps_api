import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './index.scss';
import { selectMarkersAddresses } from '../../../features/AutocompleteLocationSearch/slice';
import getCoordinatesByPlaceId from '../../services/geoCoderLocationService';
import addMarker from '../../services/markerMapService';
import { centerMap, initMap } from '../../services/drawingMapManagerService';

let map;

function MapComponent() {

    const markers = useSelector(selectMarkersAddresses);

    const initializeMap = async () => {
        const mapElementId = document.getElementById("map");
        const initOptions = {
            center: { lat: 41.490519535953377, lng: 2.1114385293669247 },
            zoom: 15,
            disableDefaultUI: true,
        };

        map = await initMap({ mapElementId, initOptions, canDraw: false });
    }

    const getCoordinatesAndAddMarker = async () => {
        const location = await getCoordinatesByPlaceId(markers[markers.length - 1].place_id);
        addMarker(location, map);
        centerMap(location);
    }

    useEffect(() => {
        initializeMap();
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
