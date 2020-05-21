import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import NotFound from './NotFoundComponent';

 function RenderArticle({article}) {
        if (article != null){
            return(
                <div className="news-detail clearfix">
                    <div className="news-detail__image"><img width="40%" height="auto" src={article.image} alt={article.title} /></div>
                    <div className="news-detail__info col-md-12">
                        <div className="news-detail__title">{article.title}</div>
                        <div className="news-detail__author">{article.author}</div>
                        <div className="news-detail__text"> {article.text} </div>
                    </div>
                    <a className="return-btn" href="/news"><i className="fa fa-angle-double-left"></i> Вернуться к списку новостей</a>
                </div>
               
              
            );
        } else{
            return(
                <NotFound/>
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
                    <div className="row breadcrumb__row">
                        <Breadcrumb className="custom-breadcrumb"> 
                            <BreadcrumbItem>
                            <Link to="/news">Новости</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                            {props.article.title}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className = "col-12 col-md-12 m-1">
                            <RenderArticle article={props.article}/>
    
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




export default ArticleDetail;