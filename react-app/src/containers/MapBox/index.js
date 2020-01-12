import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Dimensions from "react-dimensions";
import { Container, Pin } from "./styles";
import MapGL, {Marker, GeolocateControl} from "react-map-gl";
import PropTypes from "prop-types";
import Properties from './property'

import {TOKEN} from '../../configs/MapBox'


const MapBox = ({cars, parentDimensions, height}) => { 
    
  const [ viewport, setViewPort ] = useState({})
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  



  useEffect(() =>{
    setViewPort({
        latitude: -25.4284,
        longitude: -49.2733,
        zoom: 10.8,
        bearing: 0,
        pitch: 0
      }) 

  },[])

  


    
    
    return (
        <Container>
           
            <MapGL
                width={windowWidth}
                height={windowHeight}
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={TOKEN}
                onViewportChange={viewport => setViewPort(viewport)}
                >
                <Properties properties={cars} />
                
                
            

            </MapGL>
        </Container>
    );
  
}


export default MapBox