import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 function RenderArticle({article}) {
        if (article != null){
            return(
               
                <Card>
                    <CardImg width='100%' object src={article.image} alt={article.name}/>
                    <CardBody>
                        <CardTitle>{article.name}</CardTitle>
                        <CardText>{article.description}</CardText>
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

    const ArticleDetail=(props) => {
      
        if (props.article != null){
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        
                        <BreadcrumbItem>
                        <Link to="/news">News</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                        {props.article.name}
                        </BreadcrumbItem>
                    
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.article.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className = "row">
    
                        <div className = "col-12 col-md-5 m-1">
    
                            <RenderArticle article={props.article}/>
    
                        </div>
                        <div className = "col-12 col-md-5 m-1">

                            <RenderComments comments={props.comments} 
                          
                            articleId={props.article.id} />

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




export default ArticleDetail;