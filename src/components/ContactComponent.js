import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
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
        alert('Текущее состояние: ' + JSON.stringify(values));
    }

       
    render(){
        
           return(
        <div className="col-12 col-sm-11 col-md-9 main_block">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Главная</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Контакты</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Контакты</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-sm-4 offset-sm-1">
                         
                    <address>
		              Murino<br />
		              Shuvalova 9, 9<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:skate_map@skating.net">
                         skate_map@skating.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a href='/' role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:skate_map@skating.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
             
            </div>
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Обратная связь</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor="firstname" md={2}>Имя</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' id="firstname"     name="firstname"
                                        placeholder="Как к Вам обращаться?"
                                        className='form-control' validators={{
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
                                <Label htmlFor="telnum" md={2}>Телефон</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id="telnum" name="telnum"
                                        placeholder="Номер телефона"
                                        className='form-control'  validators={{
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
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id="email" name="email"
                                        placeholder="Email"
                                        className='form-control' validators={{
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
                                <Label htmlFor="message" md={2}>Сообщение</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id="message" name="message"
                                        rows="12"
                                        className='form-control'
                                        />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Отправить
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
               </div>
        </div>
    );
    }
 
}

export default Contact;