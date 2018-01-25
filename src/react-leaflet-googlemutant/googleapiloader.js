import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleApiLoader extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    apiKey: PropTypes.string,
    libraries: PropTypes.arrayOf(
      PropTypes.oneOf([
        'drawing',
        'geometry',
        'places',
        'visualization',
        'directions',
      ])
    ),
  }

  state = {
    googleLoaded: false,
    url: 'https://maps.googleapis.com/maps/api/js',
    version: '3.27',
    client: null,
    language: null,
    region: null,
    channel: null,
    libraries: [],
    callback: '__google_maps_api_provider_initializator__',
    children: null,
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      ...this.props,
    });
  }

  componentDidMount() {
    if (!this.state.googleLoaded) {
      this.load();
    }
  }

  afterLoad = () => {
    this.setState({
      ...this.state,
      googleLoaded: true,
    });
  }

  createUrl = () => {
    const {
      url,
      callback,
      libraries,
      client,
      version,
      channel,
      language,
      region,
      signature,
      apiKey,
    } = this.state;
    const chave = apiKey ? `&key=${apiKey}` : '';
    const assinatura = signature ? `&signature=${signature}` : '';
    const libs = libraries.length ? `&libraries=${libraries.join(',')}` : '';
    const cliente = client ? `&client=${client}&v=${version}` : '';
    const canal = channel ? `&channel=${channel}` : '';
    const lang = language ? `&language=${language}`: '';
    const regiao = region ? `&region=${region}`: '';
    return `${url}?callback=${callback}${assinatura}${chave}${libs}${cliente}${canal}${lang}${regiao}`;
  }

  load = () => {
    const { callback } = this.state;
    if (!window[callback]) {
      window[callback] = () => {};
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.createUrl();
    script.onload = this.afterLoad;
    document.body.appendChild(script);
  }

  render() {
    const { googleLoaded } = this.state;
    const { children } = this.props;
    if (!googleLoaded) {
      return null;
    }
    return children;
  }
}

export default GoogleApiLoader;
