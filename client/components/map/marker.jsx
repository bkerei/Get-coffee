import React from 'react';
import ReactDOM from 'react-dom';



const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class CurrentLocation extends React.Component {



}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -41.28664,
    lng: 174.77557
  },
  centerAroundCurrentLocation: false,
  visible: true
};

export default marker;