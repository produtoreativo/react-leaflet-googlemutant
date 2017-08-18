## Example with static load of gmaps API

### Install

yarn add react react-dom leaflet react-leaflet react-leaflet-googlemutant

### Inport with GMaps loader class

```js
import React, { Component } from 'react';
import { Map, LayersControl } from 'react-leaflet';
import { GoogleMutant, GoogleApiLoader } from 'react-leaflet-googlemutant';
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
        <GoogleApiLoader apiKey="AXSBVXSBVXSBVXBSVXS">
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
                <GoogleMutant type="hybrid" />
              </BaseLayer>
            </LayersControl>
          </Map>
        </GoogleApiLoader>
      </div>
    );
  }
}

export default App;
```

### Import with script into html

```html
<script src="https://maps.google.com/maps/api/js?v=3.2" charset="utf-8"></script>
```

### Considering that there is a global variable as **google**

```js

import React, { Component } from 'react';
import { Map, LayersControl } from 'react-leaflet';
import GoogleMutant from 'react-leaflet-googlemutant';
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

```

## License

MIT  
See [LICENSE](LICENSE) file.
