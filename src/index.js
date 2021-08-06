import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      center : {
        lat: 37.3596049, 
        lng: -122.0665
      },
      zoom : 16,
      myMarkers : []
    };
  }

  render() {
    return (
      <div>
        <center>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyCwi8jdM7JESQxOZVEsNaCQyeqK6iK1C4I' }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
          >
          
              {/* <Marker
               lat= "37.3596049"
               lng =" -122.0665"
                 
              /> */}
         
          </GoogleMapReact>
        </div>
        </center>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


