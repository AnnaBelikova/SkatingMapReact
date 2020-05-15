import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Polyline, Popup } from 'react-leaflet';
import { STREETS } from '../shared/streets.js';


class MapStreets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            streets:STREETS,
            activeBtn: 'all',
            showGood:true,
            showBad:true,
            showMiddle:true,
        };
    
    }
       
render(){
  
    
    const streetsList = this.props.streets.map((street) => {
         const cat = street.category
            return (
                <div key={street.id}>     
                    <Polyline  color={this.state.showBad && cat==="bad" ? 'red' :  this.state.showGood && cat==="good" ? 'green': this.state.showMiddle && cat==="middle" ? 'orange' : 'transparent'} positions={street.points} ><Popup> Дата: {street.date}<br/>
                            Добавил:{street.author} <br/>
                            Улица: {street.name}<br/>
                            {street.desc} <br/>
                            <em> {street.test ? 'Информация не действительна, тестовая запись!!!' : ''} </em></Popup>
                </Polyline>
                    
                    
               
                </div>
            );
        });
         return(
              
             <div className="map_block">
                <div className="map_tabs">
                            <div  onClick={() => this.setState({activeBtn: 'all', showGood: true, showBad:true, showMiddle:true})} className={'all map_tab '+ (this.state.activeBtn === 'all' ? 'current' : '')}>Все</div>
                            <div  onClick={() => this.setState({activeBtn: 'good', showGood: true, showBad:false, showMiddle:false })} className={"good map_tab " +(this.state.activeBtn === 'good' ? 'current' : '')}>Шоколад!</div>
                            <div  onClick={() => this.setState({activeBtn: 'middle', showGood: false, showBad:false, showMiddle:true})} className={"middle map_tab "+(this.state.activeBtn === 'middle' ? 'current' : '')}>Средне</div>
                            <div  onClick={() => this.setState({activeBtn: 'bad', showGood: false, showBad:true, showMiddle:false})} className={"bad map_tab " + (this.state.activeBtn === 'bad' ? 'current' : '')}>Проезда нет</div>
                </div> 
            <div className="map_card">
                <LeafletMap center={[59.938946, 30.314982]} zoom={10} maxZoom={20} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} animate={true} easeLinearity={0.35}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
        
                {streetsList}
             
        </LeafletMap>
</div>
        </div>
    )}
}
export default MapStreets;