import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss'

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
// 
 
  render() {
    const coord = {lat: 40.430177,lng: -3.632644}
    
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '60vh', width: '50%', padding: '5', margin: '10'}}>
          <h2>Our location:</h2>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBw93H7Yauh3E8ol0v6f8RZW5sdXxApTF0'}}
          defaultCenter={coord}
          defaultZoom={15}
        >
           

          {/* <AnyReactComponent
            lat={40.430177}
            lng={-3.632644}
            text= 'Here!'
            // {<img src="https://image.flaticon.com/icons/png/512/45/45756.png" alt=""/>}
            /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;