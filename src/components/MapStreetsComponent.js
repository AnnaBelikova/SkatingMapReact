import React, { useState, Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Map as LeafletMap, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { STREETS } from '../shared/streets.js';

function RenderPolylineItem({street}, props){
    const cat = street.category;
    return(
     <div>
                <Polyline className={props.showRoad} color={cat==='bad' ? 'red': cat==='good'? 'green' :  'yellow'} positions={street.points} />
                <Marker position={street.center}>
                <Popup>{props.showRoad} {street.name}: {street.desc}</Popup>
                </Marker>
    </div>
    );
}

class MapStreets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            streets:STREETS,
            activeBtn: 'all',
            showRoad: 'true',
            
        };
    
    }
       
render(){
  
    
    const streetsList = this.props.streets.map((street) => {
            return (
                <div key={street.id}>
                    <RenderPolylineItem showRoad={this.state.showRoad} street={street} onClick={this.props.onClick} />
                </div>
            );
        });
         return(
             <div className="map_block">
                <LeafletMap center={[59.938946, 30.314982]} zoom={10} maxZoom={20} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} animate={true} easeLinearity={0.35}>
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        
                {streetsList}
             
        </LeafletMap>
                        <div className="map_tabs">
                            <div className="all map_tab current" onClick={() => this.setState({activeBtn: 'all', showRoad: 'true'})} className={'all map_tab '+ (this.state.activeBtn === 'all' ? 'current' : '')}>Все</div>
                            <div className="good map_tab"  onClick={() => this.setState({activeBtn: 'good', showRoad: 'false' })} className={"good map_tab " +(this.state.activeBtn === 'good' ? 'current' : '')}>Шоколад!</div>
                            <div className="middle map_tab" onClick={() => this.setState({activeBtn: 'middle'})} className={"middle map_tab "+(this.state.activeBtn === 'middle' ? 'current' : '')}>Средне</div>
                            <div className="bad map_tab" onClick={() => this.setState({activeBtn: 'bad'})} className={"bad map_tab " + (this.state.activeBtn === 'bad' ? 'current' : '')}>Проезда нет</div>
                        </div>            
        </div>
    )}
}
export default MapStreets;