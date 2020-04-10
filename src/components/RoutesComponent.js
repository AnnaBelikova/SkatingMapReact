import React, { Component } from 'react';

import {  Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderRouteItem({route, onClick}){
    return(
        <div className="news__item row">
        
                <div className="col-12 col-md-3"><img src={route.image} alt={route.name} /></div>
                <div className="news_item__info col-12 col-md-9">
                    <div className="news_item__title">{route.name}</div>
        
                    <div className="news_item__text"> {route.description} </div>
        
                    <Link to={`/routes/${route.id}`} >
                        <Button color="primary" className='news_item__detailbtn'>Подробнее</Button>
                    </Link>
                </div>
            
        </div>
    );
}

class Routes extends Component {
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
        alert("Название: " + this.route_title.value + " Описание: " + this.route_text.value + 
            " Поделись!" );
        event.preventDefault();
    }
        
    render(){
        const routes = this.props.routes.map((route) => {
            return (
                <div className=' col-12'  key={route.id}>
                    <RenderRouteItem route={route} onClick={this.props.onClick} />
                </div>
            );
        });
        return (
               <div className='col-12 col-md-9 main_block'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Главная</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Маршруты</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <div className="row title__add">
                            <h3>Маршруты</h3>
                            <Button color="primary" onClick = {this.toggleModal}>Добавить маршрут</Button>
                        </div>
                    </div>                
                </div>
                <div className='row news__items'>
                    {routes}
                </div>
 <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                    <ModalHeader toggle = {this.toggleModal} > 
                        Добавь свой маршрут
                    < /ModalHeader> 
                    <ModalBody>
                        <Form onSubmit = {this.handleRoute} >
                            <FormGroup >
                                <Label htmlFor = "route_title" > Название< /Label> 
                                <Input type = "text" id = "route_title" name = "route_title" innerRef = {(input) => this.route_title = input}/> 
                            </FormGroup> 
                            <FormGroup >
                                <Label htmlFor = "route_text" > Описание < /Label> 
                                <Input type = "textarea" rows="10" id = "route_text" name = "route_text" innerRef = {(input) => this.route_text = input}/> 
                            </FormGroup> 
                            <Label htmlFor = "route_level" > Уровень < /Label> 
                            <FormGroup >
                                
                                      <div className="custom-control custom-checkbox custom-control-inline">
                                        <Input type="checkbox" name="route_level" id="level_beginner" value="beginner"/>
                                        <Label htmlFor = "level_beginner" >Начинающий</Label>
                                      </div>

                                     
                                      <div className="custom-control custom-checkbox custom-control-inline">
                                        <Input type="checkbox" name="route_level" id="level_middle" value="middle"/>
                                       <Label htmlFor = "level_middle" >Среднячок</Label>
                                      </div>

                                
                                      <div className="custom-control custom-checkbox custom-control-inline">
                                        <Input type="checkbox" name="route_level" id="level_prof" value="profi"/>
                                        <Label htmlFor = "level_prof" >Профи</Label>
                                      </div>
                            </FormGroup> 
                            <Button type = "submit" value = "submit" color = "primary" > Поделись! < /Button> 
                        </Form> 
                    </ModalBody> 
                </Modal>
            </div>
        )};
    }

export default Routes;