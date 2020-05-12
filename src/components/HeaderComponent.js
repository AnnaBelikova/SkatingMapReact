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
            <Navbar expand = "md" className="lightnav">
                <div className = "container" >
                    <NavbarToggler onClick = {this.toggleNav}/> 
                    <NavbarBrand className = "mr-auto" href = "/" > 
                            <div class="logo_complex">
                                <div class='logo'>ПнК</div>
                                <svg class="logo_wheel" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
                                 <g>
                                  <ellipse fill="none" stroke="#2cb1bc" stroke-width="30" cx="110.000003" cy="110.000002" id="svg_1" rx="90" ry="90"/>
                                  <ellipse fill="none" stroke="#bbbbbb" stroke-width="10" cx="110.000003" cy="110.000002" id="svg_3" rx="60" ry="60"/>
                                  <ellipse fill="none" stroke="#bbbbbb" stroke-width="10" cx="109.999998" cy="110.000003" id="svg_5" rx="20" ry="20"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="110.000002" cy="69.325903" id="svg_8" rx="11.5" ry="7.5" transform="rotate(90, 110, 69.3259)"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="109.999998" cy="150.692763" id="svg_9" rx="11.5" ry="7.5" transform="rotate(90, 110, 150.693)"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="150.302076" cy="109.999997" id="svg_14" rx="11.5" ry="7.5"/>
                                  <ellipse fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="69.935217" cy="110" id="svg_15" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(-45, 142.302, 83)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="142.302076" cy="82.999997" id="svg_4" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(-45, 80.3021, 137)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="80.302076" cy="136.999997" id="svg_6" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(45, 140.302, 136)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="140.302076" cy="135.999997" id="svg_16" rx="11.5" ry="7.5"/>
                                  <ellipse transform="rotate(45, 82.3021, 81)" fill="#BBBBBB" stroke="#000" stroke-width="0" stroke-opacity="null" cx="82.302076" cy="80.999997" id="svg_17" rx="11.5" ry="7.5"/>
                                 </g>
                                </svg>
                            </div>
                    < /NavbarBrand> 
            
                    <Collapse isOpen = {this.state.isNavOpen}navbar >
                        <Nav className="menu__items" navbar >
                            <NavItem >
                                <NavLink className = "nav-link" to = '/aboutus' > О&nbsp;проекте</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/news' > Новости</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/routes' > Маршруты</NavLink >
                            </NavItem> 
                            <NavItem >
                                <NavLink className = "nav-link" to = '/contactus' > Контакты</NavLink >
                            </NavItem> 
                        </Nav>
                                    <div class="login_button">
                                        { !this.props.auth.isAuthenticated ?
                                        <button onClick = {this.toggleModalLogin } > 
                                            <span className="fa fa-sign-in fa-lg"></span> Войти
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.user_login}</div>
                                        <button onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Выйти
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </button>
                                        </div>
                                    }

                                </div> 
                    </Collapse> 
                </div> 
            </Navbar> 
            
            <Jumbotron>
               <img src="../assets/images/3.jpg" width='1920px' height='486px' className="img-fluid" alt="BG"/>
                <div className = "container" >
                    <div className = "row row-header" >
                        <div className = "jumbotron__info col-12 col-md-10 col-lg-8" >
                            <h1> Питер на колесах</h1> 
                            <p> Карта для тех, кто любит передвигаться по городу на 8 колесах.</p> 
                        </div> 
                    </div>
                        <Form className="header__form col-10">
                                <FormGroup className="header__input">
                                    <Label className="header__label" htmlFor = "startpoint" > Начало маршрута < /Label> 
                                    <Input className="header__inputline" type = "text" id = "startpoint" name = "startpoint" innerRef = {(input) => this.startpoint = input}/> 
                                </FormGroup> 
                                <FormGroup className="header__input">
                                    <Label className="header__label" htmlFor = "endpoint" > Конец маршрута < /Label> 
                                    <Input className="header__inputline" type = "endpoint" id = "endpoint" name = "endpoint" innerRef = {(input) => this.endpoint = input}/> 
                                </FormGroup> 
                                 <FormGroup>
                                    <button className="header__button" type = "submit" value = "submit"> Поехали< /button>
                                </FormGroup>
                        </Form>
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
