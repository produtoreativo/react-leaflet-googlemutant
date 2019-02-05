import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { MapLayer } from 'react-leaflet';

export default class GoogleMutant extends MapLayer {

  static propTypes = {
    type: PropTypes.oneOf(['hybrid', 'roadmap', 'satellite', 'terrain']),
    layer: PropTypes.oneOf(['TrafficLayer', 'TransitLayer'])
  }

  version = process.env.__VERSION__

  createLeafletElement(props) {
    const config = { type: 'roadmap', ...props };
    const layer = new L.gridLayer.googleMutant(config);
    if (props.layer) {
      layer.addGoogleLayer(props.layer)
    }
    return layer;
  }
}
