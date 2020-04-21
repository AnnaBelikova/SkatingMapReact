import React, {Component} from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }
 
  
    render(){
            return(
                <div className='col-12 col-md-9 main_block'>
                <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Главная</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Админ</BreadcrumbItem>
                    </Breadcrumb>
                
                        <h2> Сюда можно только админу ;) </h2>
                </div>    
            );
            }
}

export default Admin;
