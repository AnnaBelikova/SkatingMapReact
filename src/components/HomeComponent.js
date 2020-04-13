import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import MapStreets from './MapStreetsComponent';
import { STREETS } from '../shared/streets.js';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            streets:STREETS,
            activeBtn: 'all',
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
    }
    
     toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleRoute(event) {
        this.toggleModal();
        alert("Стартуем: " + this.startpoint.value + " Финишируем: " + this.endpoint.value +
            " ВПЕРЕД!" );
        event.preventDefault();
    }
    
 
  
    render(){
        return(
        <div className="col-12 col-md-12 col-lg-9 main_block">
                <div className="row">
                    <Button className="pulse_btn routeBtn" variant="outlined" size="large" color="primary" onClick = {this.toggleModal}>Построить маршрут</Button>
                </div>
                <div className="row align-items-start">
                    <MapStreets streets={this.state.streets} />  
                </div>
                 <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                    <ModalHeader toggle = {this.toggleModal} > 
                        Построить маршрут  
                    < /ModalHeader> 
                    <ModalBody>
                        <Form onSubmit = {this.handleRoute} >
                            <FormGroup >
                                <Label htmlFor = "startpoint" > Стартуем < /Label> 
                                <Input type = "text" id = "startpoint" name = "startpoint" innerRef = {(input) => this.startpoint = input}/> 
                            </FormGroup> 
                            <FormGroup >
                                <Label htmlFor = "endpoint" > Финишируем < /Label> 
                                <Input type = "endpoint" id = "endpoint" name = "endpoint" innerRef = {(input) => this.endpoint = input}/> 
                            </FormGroup> 
                            <Button type = "submit" value = "submit" color = "primary" > Покатили! < /Button> 
                        </Form> 
                    </ModalBody> 
                </Modal>
        </div>
        )};
}

export default Home;
