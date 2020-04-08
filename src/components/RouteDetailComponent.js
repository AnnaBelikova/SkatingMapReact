import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 function RenderRoute({route}) {
        if (route != null){
            return(
               
                <Card>
                    <CardBody>
                        <CardTitle>{route.name}</CardTitle>
                        <div className="routes_category">{route.category}</div>
                        <CardText>
                            <p>{route.description}</p>
                            <p className="routes_direction">{route.direction}</p>
                        </CardText>
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
                  
                        <li><p>{comment.comment}</p>
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

            <div>
            
                <h4>Comments</h4>
                <ul className="list-unstyled">
                  
                        { com }
                   
                </ul>
               
            </div>
            
            );
    }

    const RouteDetail=(props) => {
      
        if (props.route != null){
            return (
                <div className="col-9 col-md main_block">
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
                        <h3>{props.route.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className = "row">
    
                        <div className = "col-12 col-md-12 m-1">
    
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