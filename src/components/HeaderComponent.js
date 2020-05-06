import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const required = (val) => val && val.length;
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalLoginOpen: false,
            isModalRegOpen:false,
        };
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.toggleModalReg = this.toggleModalReg.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleReg = this.handleReg.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
     
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModalLogin() {
        this.setState({
            isModalLoginOpen: !this.state.isModalLoginOpen
        });
    }
    toggleModalReg() {
        this.setState({
            isModalRegOpen: !this.state.isModalRegOpen
        });
    }


    handleLogin(event) {
        event.preventDefault();
        this.toggleModalLogin();
        this.props.loginUser({
             username:this.username.value,
             password:this.password.value
       });
    }

    handleLogout() {
        this.props.logoutUser();
    }
    
    handleReg(event) {
        this.toggleModalReg();
        alert("Username: " + this.username.value + " Password: " + this.password.value + this.password.value 
           );
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
                                <NavItem>
                                        { !this.props.auth.isAuthenticated ?
                                        <Button variant="outlined" color="primary"  onClick = {this.toggleModalLogin } > 
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.user_login}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

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
                
            <Modal isOpen = {this.state.isModalLoginOpen} toggle = {this.toggleModalLogin}>
                <ModalHeader toggle = {this.toggleModalLogin}> Войти </ModalHeader> 
                <ModalBody >
                    <Form onSubmit = {this.handleLogin} >
                        <FormGroup >
                            <Label htmlFor = "username" > Логин < /Label> 
                            <Input type = "text"
                                id = "username"
                                name = "username"
                                innerRef = {(input) => this.username = input}
                            /> 
                        </FormGroup> 
                        <FormGroup >
                            <Label htmlFor = "password" > Пароль < /Label> <
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
                        <Button className='mr-5' type = "submit"
                            value = "submit"
                            color = "primary" > Войти 
                        </Button> 
                        <Button  onClick = {() => this.setState({isModalRegOpen: true, isModalLoginOpen: false})}
                            color = "secondary" > Нужна регистрация 
                        </Button> 
                    </Form> 
                </ModalBody> 
            </Modal> 



            <Modal isOpen = {this.state.isModalRegOpen} toggle = {this.toggleModalReg}>
                <ModalHeader toggle ={this.toggleModalReg}> Регистрация </ModalHeader> 
                <ModalBody >
                    <Form action='reg.php' method='post' onSubmit = {this.handleReg} >
                        <FormGroup >
                            <Label htmlFor = "username" > Логин < /Label> 
                            <Input type = "text"
                                id = "username"
                                name = "username"
                                innerRef = {(input) => this.username = input}
                            /> 
                        </FormGroup> 
                        <FormGroup >
                            <Label htmlFor = "email" > Email < /Label> 
                            <Input type = "email"
                                id = "email"
                                name = "email"
                                innerRef = {(input) => this.email = input}
                            /> 
                        </FormGroup> 
                        <FormGroup >
                            <Label htmlFor = "password" > Пароль < /Label> <
                            Input type = "password"
                            id = "password"
                            name = "password"
                            innerRef = {
                                (input) => this.password = input
                            }
                            /> 
                        </FormGroup>
                        <FormGroup >
                            <Label htmlFor = "repeatPassword" > Повторите пароль < /Label> <
                            Input type = "repeatPassword"
                            id = "repeatPassword"
                            name = "repeatPassword"
                            innerRef = {
                                (input) => this.repeatPassword = input
                            }
                            /> 
                        </FormGroup>
                        
                        <Button type = "submit"
                            value = "submit"
                            color = "primary" > Зарегистрироваться 
                        </Button> 
                        
                    </Form> 
                </ModalBody> 
            </Modal>
        </div>
        );
    }
}

export default Header;
