import React, {Component} from 'react';
import { Card, CardBody, Breadcrumb, BreadcrumbItem, Row, Label,Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Map as LeafletMap, TileLayer, Polyline } from 'react-leaflet';
import { Loading } from './LoadingComponent';
import NotFound from './NotFoundComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);



class CommentForm extends Component {

    constructor(props){
        super(props); 

        this.state={
            
        };

        this.handleSubmit=this.handleSubmit.bind(this);
    }
  
    handleSubmit(values){
        this.props.addComment(this.props.routeId, values.rating, this.props.auth.author, values.comment)  
    }

    render(){
        return(
            <div>
                    <LocalForm action="http://cw44189.tmweb.ru/display_comment.php" method="post" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group" style={{display: "none"}}>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" 
                                    className='form-control' value={this.props.auth.user.user_login}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" >Оставьте комментарий</Label>
                                <Col md={12}>
                                    <Control.textarea model='.comment' id="comment" name="comment" 
                                    rows='2' className="form-control"/>
                                </Col>
                            </Row>
                        <button type="submit" value="submit" className="news__button">Отправить</button>
                    </LocalForm >
                    
            </div>
        );
    }
}




function RenderMap({route}) {
    let routeLine=[];
    routeLine=JSON.parse(route.points);
    return(
        <LeafletMap className="leafmap_route"
            center={[59.938946, 30.314982]}
            zoom={10}
            maxZoom={20}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
            <Polyline key={route.id} color={'blue'} positions={routeLine}/>

        </LeafletMap>
        
    );
}

 function RenderRoute({route}) {
     if (route != null){
            return(
                <div>
                        <div className="route_detail__title">{route.title}</div>
                        <div className="route_detail__info">
                            <div className="route_detail__row">
                                <div className="route_detail__author"> {route.author}</div>
                                <div className="route_detail__category">{route.category}</div>
                            </div>
                            <div className="route_detail__date"> {route.date}</div>
                            <div className="route_detail__conditions">
                                <div className="route_item__bridges">
                                    <svg  className="bridge" width="50" viewBox="0 0 262 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.17334 215.5C8.67334 215.5 19.6733 218 34.1733 201C49.1733 219 85.6733 217.5 98.1733 201C111.673 218.5 146.673 220.5 163.173 201C178.173 220 217.673 218.5 228.673 201C242.173 218 251.173 215.5 260.673 215.5" stroke="#49A6F5" stroke-width="17"/>
                                <rect x="46.6733" width="20" height="197" fill="#486581"/>
                                <rect x="195.673" width="20" height="197" fill="#486581"/>
                                <path d="M215.673 8.5C215.673 30.9108 206.771 52.4037 190.924 68.2505C175.077 84.0973 153.584 93 131.173 93C108.763 93 87.2696 84.0974 71.4228 68.2505C55.576 52.4037 46.6733 30.9108 46.6733 8.50001L63.7283 8.50001C63.7283 26.3875 70.8341 43.5424 83.4825 56.1908C96.1309 68.8392 113.286 75.945 131.173 75.945C149.061 75.945 166.216 68.8392 178.864 56.1908C191.513 43.5424 198.618 26.3875 198.618 8.5H215.673Z" fill="#486581"/>
                                <path d="M67.2437 29.5918C68.5731 39.178 67.8753 48.9299 65.1982 58.1787C62.521 67.4275 57.9277 75.9545 51.7334 83.1751C45.539 90.3958 37.89 96.1392 29.3108 100.012C20.7315 103.884 11.4251 105.794 2.02936 105.611L2.25072 84.4782C8.68614 84.604 15.0605 83.2958 20.9366 80.6434C26.8128 77.991 32.0519 74.0572 36.2946 69.1115C40.5373 64.1659 43.6834 58.3254 45.5171 51.9906C47.3508 45.6558 47.8287 38.9765 46.9181 32.4106L67.2437 29.5918Z" fill="#486581"/>
                                <path d="M261.08 103.405C251.402 103.426 241.834 101.417 233.032 97.5135C224.23 93.6105 216.402 87.9066 210.085 80.7929C203.768 73.6792 199.112 65.3239 196.435 56.2999C193.758 47.276 193.124 37.7967 194.576 28.5121L215.484 31.5884C214.489 37.9477 214.924 44.4404 216.757 50.6212C218.591 56.802 221.78 62.5248 226.107 67.3972C230.434 72.2696 235.795 76.1764 241.824 78.8497C247.853 81.523 254.406 82.8996 261.035 82.8851L261.08 103.405Z" fill="#486581"/>
                                <rect x="0.67334" y="148" width="260" height="19" fill="#486581"/>
                                <rect x="19.6733" y="98" width="9" height="50" fill="#486581"/>
                                <rect x="84.6733" y="76" width="9" height="72" fill="#486581"/>
                                <rect x="112.673" y="78" width="9" height="72" fill="#486581"/>
                                <rect x="139.673" y="78" width="9" height="72" fill="#486581"/>
                                <rect x="167.673" y="76" width="9" height="72" fill="#486581"/>
                                <rect x="232.673" y="78" width="9" height="72" fill="#486581"/>
                                </svg>
                                    {route.bridges==1 ? "Да" : "Нет"}
                                </div>

                                <div className="route_item__hills">
                                    <svg className="hill" width="70"  viewBox="0 0 280 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90 23C60 63 50 133 0 133H280C230 133 220 63 190 23C160 -7.00003 110 -6.99999 90 23Z" fill="#486581"/>
                                    </svg>

                                    {route.hills==1 ? "Да" : "Нет"}
                                </div>
                                <div className="route_detail__length">
                                    <i class="fa fa-road"></i>
                                    {route.length} км
                                </div>
        
                            </div>
                            <hr/>
                            <div className="route_detail__streets">{route.streets}</div>
                            <div className="route_detail__description">{route.description}</div>
                        </div>
              </div>
            );
        } else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,routeId,auth}) {
        let com;
        if(comments != null){
            com=comments.map((comment)=>{

            return(
                    <div key={comment.id}>
                        <li className="comment_list__item">
                            <div className="user__avatar"><i className="fa fa-user"></i></div>
                            <div className="comment__info">
                                <p className="comment__author">{comment.author}</p>
                                <p className="comment__text">{comment.comment}</p>
                            </div>
                        </li>
                    <hr/>
                    </div>
                    
            );
        });
        }else{
            return(
                <div></div>
            );
        }
        return (

            <div className="comments_list">
            
                <h3>Комметарии</h3>
                <ul className="list-unstyled">
                  
                        { com }
                   
                </ul>
                { auth.isAuthenticated ?
                <CommentForm auth={auth} routeId={routeId}/>
                : 
                <div className="route_detail__registration"> Зарегистрируйтесь, чтобы оставить комментарий</div>
            
                }
                
               
            </div>
            
            );
    }

    const RouteDetail=(props) => {
      if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.route != null){
            
            return (
                <div className="col-12 col-md-9 main_block">
                    <div className="row breadcrumb__row">
                        <Breadcrumb className="custom-breadcrumb">

                            <BreadcrumbItem>
                            <Link to="/routes">Маршруты</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                            {props.route.title}
                            </BreadcrumbItem>

                        </Breadcrumb>
                    </div>
                <hr />
                    <div className = "row">
                        <div className = "col-12 col-md-12 m-1 route_detail">
                            <RenderMap route={props.route}/>
    
                            <RenderRoute route={props.route}/>
    
                        </div>
                        <div className = "col-12 col-md-12 m-1 comments">

                            <RenderComments comments={props.comments} 
                          
                            routeId={props.route.id} auth={props.auth}/>

                        </div>

                    </div>
                </div>   
            )
        }else{
            return (
                <NotFound/>
            )
        }
    }




export default RouteDetail;