import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import MapStreets from './MapStreetsComponent';
import { STREETS } from '../shared/streets.js';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streets:STREETS,
            activeBtn: 'all',
        };
       
    }
    
    render(){
        return(
        <div className="col-12 col-md-12 col-lg-9 main_block">
                <div className="row align-items-start">
                    <MapStreets streets={this.state.streets} />  
                </div>
        </div>
        )};
}

export default Home;
