import React, {Component} from 'react';
import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderUserItem({user}){
    return(
        <tr>
            <td>{user.id}</td>
            <td>{user.user_login}</td>
            <td>{user.user_email}</td>
            <td>{user.access}</td>
        </tr>

    );
}


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }
 
  
    render(){
           const users = this.props.users.map((user) => {
            return (
                
                    <RenderUserItem user={user} />
                
            );
        });
if (this.props.users.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.users.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{this.props.users.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else

        return (
               <div className='col-12 col-md-9 main_block'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Главная</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Админ</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <div className="row title__add">
                            <h3>Пользователи</h3>
                        </div>
                    </div>                
                </div>
                <table>
                    <tr>
                        <th> id </th>
                        <th> Логин </th>
                        <th> Email </th>
                        <th> Доступ </th>
                    </tr>

                    {users}
                </table>
                
            </div>
        )};
    }

export default Admin;
