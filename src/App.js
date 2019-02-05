import React, { Component } from 'react';
import { Map, LayersControl } from 'react-leaflet';
import GoogleApiLoader from 'react-leaflet-googlemutant/googleapiloader';
import GoogleMutant from 'react-leaflet-googlemutant/googlemutant';
import './App.css';

import dotenv from 'dotenv'
dotenv.config()

class App extends Component {
  render() {
    const { BaseLayer } = LayersControl;
    const mapConf = {
      zoom: 12,
      center: [-3.7925557,-38.497655],
      zoomControl: true,
      doubleClickZoom: false,
    };
    return (
      <div className="App">
        <GoogleApiLoader apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <Map {...mapConf}>
            <LayersControl position='topright'>
              <BaseLayer checked name='Google Maps Roads'>
                <GoogleMutant type="roadmap"/>
              </BaseLayer>
              <BaseLayer name='Google Maps Terrain'>
                <GoogleMutant type="terrain" />
              </BaseLayer>
              <BaseLayer name='Google Maps Satellite'>
                <GoogleMutant type="satellite" />
              </BaseLayer>
              <BaseLayer  name='Google Maps hybrid'>
                <GoogleMutant type="hybrid" />
              </BaseLayer>
              <BaseLayer  name='Google Maps Traffic'>
                <GoogleMutant type="roadmap" layer="TrafficLayer" />
              </BaseLayer>
              <BaseLayer  name='Google Maps Trasit'>
                <GoogleMutant type="roadmap" layer="TransitLayer" />
              </BaseLayer>
            </LayersControl>
          </Map>
        </GoogleApiLoader>
      </div>
    );
  }
}

export default App;
