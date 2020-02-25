import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios'

const URL = 'http://localhost:4000/points'

export class Mapa extends Component {

    constructor(props){
        super(props)
        this.state = {
            inicialPosition: {
                lat: -23.620452,
                lng: -46.617136
            },
            stores: []
        }
    }

    componentDidMount() {
        console.log('buscando dados.....')
       axios.get(`${URL}`)
        .then(resp => this.setState({...this.state, 'stores': resp.data}))
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
            }}
            onClick={() => console.log("You clicked me!")} />
        })
    }

    displayMarkersWithClusterer = () => {
        var markers = []
        this.state.stores.map((store, index) => {
            
            var marker = <Marker key={index} id={index} position={{
                lat: store.lat,
                lng: store.lng
                }}
                onClick={() => console.log("You clicked me!")} />
            markers.push(marker);
        })
        console.log(markers);
        //MarkerClusterer(Map, markers);
    }

  render() {
    return (
        <Map google={this.props.google} 
                zoom={8}
                onClick={this.onMapClicked}
                initialCenter={this.state.inicialPosition}    
        >
            {this.displayMarkers()}
            
        </Map>
       
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDIXIBIuCxjS1eU7CtTfnrHtEI-7CM9aVQ")
  })(Mapa)