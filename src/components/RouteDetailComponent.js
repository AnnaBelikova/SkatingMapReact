import React, {Component} from 'react';
import { Card, CardBody, Breadcrumb, BreadcrumbItem, Row, Label,Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Map as LeafletMap, TileLayer, Polyline } from 'react-leaflet';
import { Loading } from './LoadingComponent';

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
        this.props.addComment(this.props.routeId, values.rating, values.author, values.comment)  
    }

    render(){
        return(
            <div>
                    <LocalForm action="http://cw44189.tmweb.ru/display_comment.php" method="post" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                                <Label htmlFor="author" md={4}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" 
                                    placeholder='Your Name' className='form-control'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        className="text-danger" 
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength:"Must be greater than 2 characters",
                                            maxLength:"Must be 15 characters or less"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model='.comment' id="comment" name="comment" 
                                    rows='5' className="form-control"/>
                                </Col>
                            </Row>
                        <Button type="submit" value="submit" color="primary">Отправить</Button>
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
               
                <Card className="route_card">
                    <CardBody>
                        <div class='route_info'>
                            <div className="routes_category"><b>Уровень сложности:</b> {route.category}</div>
                            <div className="routes_author"><b>Добавил:</b> {route.author}</div>
                            <div className="routes_date"><b>Дата:</b> {route.date}</div>
                            <div className="routes_direction"><b>Протяженность:</b> {route.length}</div>
                            <br/>
                            <div><em>{route.description}</em></div>
                        </div>
                        
                    </CardBody>
                
                </Card>
              
            );
        } else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,routeId}) {
        let com;
        if(comments != null){
            com=comments.map((comment)=>{

            return(
                    <div key={comment.id}>
                        <li className="comment_list__item"><p>{comment.comment}</p>
                            <p>--{comment.author}</p>
                        </li>
                    
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
                <CommentForm routeId={routeId}/>
               
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
                    <div className="row">
                    <Breadcrumb>
                        
                        <BreadcrumbItem>
                        <Link to="/routes">Маршруты</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                        {props.route.name}
                        </BreadcrumbItem>
                    
                    </Breadcrumb>
                    <div className="col-12">
                        <div className=' col-12'>
                        </div>
                        <h3>{props.route.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className = "row">
    
                        <div className = "col-12 col-md-12 m-1">
                            <RenderMap route={props.route}/>
    
                            <RenderRoute route={props.route}/>
    
                        </div>
                        <div className = "col-12 col-md-12 m-1">

                            <RenderComments comments={props.comments} 
                          
                            routeId={props.route.id}/>

                        </div>

                    </div>
                </div>   
            )
        }else{
            return (
                <div></div>
            )
        }
    }




export default RouteDetail;