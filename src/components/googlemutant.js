import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { GridLayer } from 'react-leaflet';

export default class GoogleMutant extends GridLayer {

  static propTypes = {
    type: PropTypes.oneOf(['HIBRID', 'roadmap', 'satellite', 'terrain']),
  }

  version = process.env.__VERSION__

  componentWillMount() {
    super.componentWillMount();
    const config = {
      type: 'roadmap',
      ...this.props,
    };
    this.leafletElement = new L.gridLayer.googleMutant(config);
  }

}
