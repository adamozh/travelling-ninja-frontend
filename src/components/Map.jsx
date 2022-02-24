import React from 'react'
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import { locations } from '../static/locations';
import SwipeableEdgeDrawer from './SwipableEdgeDrawer';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 1.3521,
    lng: 103.8198
};

export const Map = () => {
    var randomColor = require('randomcolor')
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)
    const [response, setResponse] = React.useState(null)

    const directionsCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response)
            } else {
                console.log('response: ', response)
            }
        }
    }

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        for (let i = 0; i < locations.length; i++) {
            bounds.extend(locations[i])
        }
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    function createKey(location) {
        return location.lat + location.lng
    }
    
    const directionsServiceOptions = {
        destination: locations[90],
        origin: locations[0],
        travelMode: 'DRIVING'
    }

    const directionsRendererOptions = {
            directions: response
    }

    return isLoaded ? (
      <div>
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
        {locations.map(location => {
            return (
                <Marker
                icon={{
                    path: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                    fillColor: randomColor(),
                    fillOpacity: 0.9,
                    scale: 2,
                    strokeColor: "black",
                    strokeWeight: 1,
                }}
                position={location}
                />
            )
        })}
        <DirectionsService
            // required
            options={directionsServiceOptions}
            // required
            callback={directionsCallback}
            // optional
            onLoad={directionsService => {
            console.log('DirectionsService onLoad directionsService: ', directionsService)
            }}
            // optional
            onUnmount={directionsService => {
            console.log('DirectionsService onUnmount directionsService: ', directionsService)
            }}
        />
        <DirectionsRenderer
            // required
            options={directionsRendererOptions}
            // optional
            onLoad={directionsRenderer => {
            console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
            }}
            // optional
            onUnmount={directionsRenderer => {
            console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
            }}
        />
    </GoogleMap>
    <SwipeableEdgeDrawer />
    </div>
) : <></>
}