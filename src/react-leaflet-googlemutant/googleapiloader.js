import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleApiLoader extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    key: PropTypes.string,
    libraries: PropTypes.arrayOf(
      PropTypes.oneOf(['drawing', 'geometry', 'places', 'visualization'])
    ),
  }

  state = {
    key: null,
    googleLoaded: false,
    url: 'https://maps.googleapis.com/maps/api/js',
    version: '3.27',
    client: null,
    language: null,
    region: null,
    channel: null,
    libraries: [],
    callback: null,
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
      key,
      libraries,
      client,
      version,
      channel,
      language,
      region,
    } = this.state;
    const chave = key ? `&key=${key}` : '';
    const libs = libraries.length ? `&libraries=${libraries.join(',')}` : '';
    const cliente = client ? `&client=${client}&v=${version}` : '';
    const canal = channel ? `&channel=${channel}` : '';
    const lang = language ? `&language=${language}`: '';
    const regiao = region ? `&region=${region}`: '';
    return `${url}?callback=${callback}${chave}${libs}${cliente}${canal}${lang}${regiao}`;
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
