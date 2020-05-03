import React from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

 function RenderArticle({article}) {
        if (article != null){
            return(
               
                <Card>
                    <CardImg width='100%' object="true" src={article.image} alt={article.title}/>
                    <CardBody>
                        <CardTitle>{article.title}</CardTitle>
                        <CardText><em>{article.author}</em></CardText>
                        <CardText>{article.text}</CardText>
                    </CardBody>
                
                </Card>
              
            );
        } else{
            return(
                <div></div>
            );
        }
    }


    const ArticleDetail=(props) => {
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
      
        else if (props.article != null){
            return (
                <div className="col-12 col-md-9 main_block">
                    <div className="row">
                    <Breadcrumb> 
                        <BreadcrumbItem>
                        <Link to="/news">Новости</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                        {props.article.title}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.article.title}</h3>
                        <hr />
                    </div>
                </div>
                    <div className = "row">
                        <div className = "col-12 col-md-12 m-1">
                            <RenderArticle article={props.article}/>
    
                        </div>
                    </div>
                </div>   
            )
        }else{
            return (
                <div className="col-12 col-md-9 main_block"> Новость не прошла</div>
            )
        }
    }




export default ArticleDetail;