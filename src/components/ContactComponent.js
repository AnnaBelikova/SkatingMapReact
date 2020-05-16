import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

       
    render(){
        
           return(
        <div className="col-12 col-sm-11 col-md-9 main_block">
            <div className="row breadcrumb__row">
                <Breadcrumb className="custom-breadcrumb">
                    <BreadcrumbItem><Link to="/home">Главная</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Контакты</BreadcrumbItem>
                </Breadcrumb>               
            </div>
            <hr/>
                <div className="contacts__content">
                <div className="row row-content contacts__row">
                    <div className="col-12 col-sm-4">    
                        <div className="contacts">
                          <a className="contacts__phone" href="/"><i className="fa fa-phone fa-lg"></i> +852 1234 5678</a>
                          <a className="contacts__email" href="mailto:bel4onok_spb@mail.ru"><i className="fa fa-envelope fa-lg"></i>
                              bel4onok_spb@mail.ru</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3">
                            <a role="button" className="contacts__btn" href="tel:+85212345678"><i className="fa fa-phone"></i></a>
                            <a role="button" className="contacts__btn" href="mailto:skate_map@skating.net"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
               <hr/>
                    <div className="row row-content">
                       <div className="col-12 contacts__form">
                          <h3>Обратная связь</h3>
                       </div>
                        <div className="col-12 col-md-9">
                            <Form model="feedback" onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Label htmlFor="firstname" >Как к Вам обращаться?</Label>
                                    <Col md={12}>
                                        <Control.text model='.firstname' id="firstname"     name="firstname"
                                            className='form-control dark' validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} />
                                            <Errors
                                                className="text-danger"
                                                model=".firstname"
                                                show="touched"
                                                messages={{
                                                required: 'Нужно заполнить. ',
                                                minLength: 'Имя должно быть длиннее 2 символов. ',
                                                maxLength: 'Имя должно быть короче 15 символов. '
                                            }}
                                         />

                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="telnum" >Номер телефона</Label>
                                    <Col md={12}>
                                        <Control.text model='.telnum' id="telnum" name="telnum"
                                            className='form-control dark'  validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                            }}/>
                                            <Errors
                                            className="text-danger"
                                            model=".telnum"
                                            show="touched"
                                            messages={{
                                                required: 'Нужно заполнить. ',
                                                minLength: 'Телефон должен быть длиннее 2 символов. ',
                                                maxLength: 'Телефон должен быть короче 15 символов. ',
                                                isNumber: 'Должен быть числом.'
                                            }}
                                         />

                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Label htmlFor="email">Email</Label>
                                    <Col md={12}>
                                        <Control.text model='.email' id="email" name="email"
                                            className='form-control dark' validators={{
                                                required, validEmail
                                            }}/>
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Нужно заполнить. ',
                                                validEmail: 'Некорректный email.'
                                            }}
                                         />
                                    </Col>
                                </Row>

                                <Row className='form-group'>
                                    <Label htmlFor="message">Сообщение</Label>
                                    <Col md={12}>
                                        <Control.textarea model='.message' id="message" name="message"
                                            rows="12"
                                            className='form-control dark'
                                            />
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col>
                                        <button className="submit-btn" type="submit" >
                                            Отправить
                                        </button>
                                        <button className="reset-btn" type="reset" >
                                            Сбросить
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                   </div>
                </div>
        </div>
    );
    }
 
}

export default Contact;