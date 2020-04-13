import React from 'react';
import { Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Map as LeafletMap, TileLayer, Polyline } from 'react-leaflet';




function RenderMap({route}) {
    
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
            <Polyline key={route.id} color={'blue'} positions={route.points}/>

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

    function RenderComments({comments}) {
        let com;
        if(comments != null){
            com=comments.map((comment)=>{

            return(
                    <div key={comment.id}>
                   
                        
                        <li className="comment_list__item"><p>{comment.comment}</p>
                            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short',  day:'2-digit'}).format(new Date(Date.parse (comment.date)))}</p>
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
               
            </div>
            
            );
    }

    const RouteDetail=(props) => {
      
        if (props.route != null){
            
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
                          
                            routeId={props.route.id} />

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