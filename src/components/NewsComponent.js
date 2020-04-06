import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderNewsItem({article, onClick}){
    return(
        <Card>
        <Link to={`/news/${article.id}`} >

                <CardImg width="100%" src={article.image} alt={article.name} />
                <CardImgOverlay>
                    <CardTitle>{article.name}</CardTitle>
                </CardImgOverlay>
            </Link>
            </Card>
    );
}

    const News = (props) => {

        const articles = props.articles.map((article) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={article.id}>
                    <RenderNewsItem article={article} onClick={props.onClick} />
                </div>
            );
        });

        return (
               <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>News</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>News</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {articles}
                </div>
            </div>
        );
    }

export default News;