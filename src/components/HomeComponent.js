import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { Map as LeafletMap, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';




function RenderMap({bad, onClick}) {
    
    return(
         <LeafletMap
        center={[59.938946, 30.314982]}
        zoom={10}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Polyline key={bad.id} color={'red'} positions={bad.points}/>
        <Marker position={[59.978637, 30.384839]}>
        <Popup>Осторожно, Блюхера раскопано!!!</Popup>
        
        </Marker>
  
      </LeafletMap>
        
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            
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
         const myMap = this.props.bad.map((bad) => {
            return (
                <div className=' col-12'  key={bad.id}>
                    <RenderMap bad={bad} onClick={this.props.onClick} />
                </div>
            );
        });
        return(
        <div className="col-9 col-md main_block">
                <div className="row " className="routeBtn">
                    <Button variant="outlined" size="large" color="primary" onClick = {this.toggleModal}>Построить маршрут</Button>
                </div>
                <div className="row align-items-start">
                    
                        {myMap}
                   
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
