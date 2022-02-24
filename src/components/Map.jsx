import React, { useEffect } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import SwipeableEdgeDrawer from './SwipableEdgeDrawer';
import { getAllClusters } from '../api/api';
import { locations } from '../static/locations';

const containerStyle = {
    width: '100%',
    height: '500px'
};

// Center of Singapore
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

    // Window zooms to fit all markers
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        for (let i = 0; i < locations.length; i++) {
            const newPoint = {
                lat: locations[i]['centre'][0],
                lng: locations[i]['centre'][1]
            }
            // const newPoint = new window.google.maps.LatLng(locations[i]['centre'][0], locations[i]['centre'][0])
            // console.log(newPoint)
            bounds.extend(newPoint)
        }
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Get location and cluster data from backend API
    // useEffect(() => {
    //     getAllClusters()
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             // setLocations(data)
    //             // setLoaded(true)
    //         })
    // }, [])

    const [clusterSequence, setClusterSequence] = React.useState([])

    useEffect(() => {
        for (let i = 1; i < locations.length - 1; i++) {
            const newSeq = clusterSequence
            newSeq.push({
                location: {
                    lat: locations[i].centre[0],
                    lng: locations[i].centre[1]
                },
                stopover: true
            })
            setClusterSequence(newSeq)
        }
    }, [])

    function createKey(location) {
        return location.lat + location.lng
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
        
        {locations.map(cluster => {
            const color = randomColor()
            return (
                <div key={cluster['clusterNumber']}>
                    {cluster['cluster'].map(x => {
                        return (
                            <Marker
                            key={createKey(x)}
                            icon={{
                                path: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
                                fillColor: color,
                                fillOpacity: 0.9,
                                scale: 2,
                                strokeColor: "black",
                                strokeWeight: 1,
                            }}
                            position={x}
                            />
                        )
                    })}
                </div>
            )
        })}
        

        <DirectionsService
            // required
            options={{ 
                origin: {
                    lat: locations[0].centre[0],
                    lng: locations[0].centre[1]
                },
                waypoints: clusterSequence,
                destination: {
                    lat: locations[locations.length-1].centre[0],
                    lng: locations[locations.length-1].centre[1]
                },
                travelMode: 'DRIVING' }}
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
            options={{ directions: response }}
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