import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value +
            " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    
    render() {
        return ( 
            <div>
            <Navbar dark expand = "md" >
                <div className = "container" >
                    <NavbarToggler onClick = {this.toggleNav}/> 
                    
                    <NavbarBrand className = "mr-auto" href = "/" > 
                        
                        <div className="logo">
                            <img className="logoImg" src="../assets/images/logo.png" width="20" alt="logo"/>
                            <span>Skater's MAP</span>
                        </div>
                    < /NavbarBrand> 
            
                    <Collapse isOpen = {this.state.isNavOpen}navbar >
                        <Nav navbar >
                            <NavItem >
                                <NavLink className = "nav-link" to = '/aboutus' > < span className = "fa fa-info fa-lg" ></span> О&nbsp;проекте</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/news' > < span className = "fa fa-newspaper-o fa-lg" > < /span> Новости</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/routes' > < span className = "fa fa-road fa-lg" > < /span> Маршруты</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/contactus' > < span className = "fa fa-address-card fa-lg" > < /span> Контакты</NavLink >
                            </NavItem> 
                            <Nav className = "ml-auto"navbar >
                                <NavItem >
                                    <Button variant="outlined" color="primary"  onClick = {this.toggleModal } > < span className = "fa fa-sign-in fa-lg" > < /span> Login</Button >
                                </NavItem> 
                            </Nav> 
                        </Nav> 
                    </Collapse> 
                </div> 
            </Navbar> 
            
            <Jumbotron>
                <img src="../assets/images/sum4_250.jpg" className="img-fluid" alt=""/>
                <div className = "container" >
                    <div className = "row row-header" >
                        <div className = "jumbotron__info col-12 col-md-10 col-lg-8" >
                            <h1> Интерактивная карта для роллеров Санкт-Петербурга </h1> 
                            <p> Проект для тех, кто любит передвигаться по городу на 8 колесах. Интерактивная карта позволит избежать столкновений с перекопаными улицами, попробовать интересные маршруты и даже поделиться своими.</p> 
                        </div> 
                    </div> 
                </div> 
            </Jumbotron> 
                
            <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                <ModalHeader toggle = { this.toggleModal}> Login </ModalHeader> 
                <ModalBody >
                    <Form onSubmit = {this.handleLogin} >
                        <FormGroup >
                            <Label htmlFor = "username" > Username < /Label> 
                            <Input type = "text"
                                id = "username"
                                name = "username"
                                innerRef = {(input) => this.username = input}
                            /> 
                        </FormGroup> 
                        <FormGroup >
                            <Label htmlFor = "password" > Password < /Label> <
                            Input type = "password"
                            id = "password"
                            name = "password"
                            innerRef = {
                                (input) => this.password = input
                            }
                            /> 
                        </FormGroup> 
                        <FormGroup check >
                            <Label check >
                                <Input type = "checkbox"
                                name = "remember"
                                innerRef = {
                                    (input) => this.remember = input
                                }/>
                                Remember me 
                            </Label> 
                        </FormGroup> 
                        <Button type = "submit"
                            value = "submit"
                            color = "primary" > Login 
                        </Button> 
                    </Form> 
                </ModalBody> 
            </Modal> 
        </div>
        );
    }
}

export default Header;
