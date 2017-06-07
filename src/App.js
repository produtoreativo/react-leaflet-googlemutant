import React, { Component } from 'react';
import { Map, LayersControl } from 'react-leaflet';
import GoogleMutant from 'components/googlemutant';
import './App.css';

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
            <BaseLayer  name='Google Maps Hydrid'>
              <GoogleMutant type="HIBRID" />
            </BaseLayer>
          </LayersControl>
        </Map>
      </div>
    );
  }
}

export default App;
