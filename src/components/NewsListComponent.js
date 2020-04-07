import React, { Component } from 'react';
import { Media } from 'reactstrap';
/*import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';*/
import { Link } from 'react-router-dom';

function RenderNewsListItem({article, onClick}){
    return(
            <Link className="newslist_item__title" to={`/news/${article.id}`} >
             
                    <span>{article.name}</span>
                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
             
            </Link>
    );
}

    const NewsList = (props) => {

        const newsList = props.articles.map((article) => {
            return (
                <div className="newslist__item m-1"  key={article.id}>
                    <RenderNewsListItem article={article} onClick={props.onClick} />
                </div>
            );
        });

        return (
                <div>
                    {newsList}
                </div>
        );
    }

export default NewsList;