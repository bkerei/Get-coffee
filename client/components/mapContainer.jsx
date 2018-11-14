import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';



const mapStyles = {
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render () {
        return (
            <Map 
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            intialCenter={{
                lat: -41.28664,
                lng: 174.77557

            }}/>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRi6CLYp7jh95IXaFzGBj-yy5D-cnEMa4'
  })(MapContainer);



