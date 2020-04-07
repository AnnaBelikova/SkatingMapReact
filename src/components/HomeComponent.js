import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import NewsList from './NewsListComponent';
import { NEWS } from '../shared/news';


function RenderMap() {

    return(
        <Card>
            <CardImg src='../assets/images/centSpb.jpg' alt="Карта" />
            <CardBody>
                <CardTitle>Карта Санкт-Петербурга</CardTitle>
                <CardText>Все улицы, проспекты бульвары и другие катательные артерии города</CardText>
            </CardBody>
        </Card>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            articles: NEWS,
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
            
            <div className="container">
                
                <div className="row " className="routeBtn">
                    <Button variant="outlined" size="large" color="primary" onClick = {this.toggleModal}>Построить маршрут</Button>
                </div>
                <div className="row align-items-start">
                    <div className="col-9 col-md">
                        <RenderMap/>
                    </div>
                    <div class="col-3 newslist">
                        <h5 className="newslist__title" >Новости на дорогах</h5>
                        <NewsList articles={this.state.articles} ></NewsList>
                    </div>
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
