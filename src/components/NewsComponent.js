import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, Button, CardText, CardBody,
    CardTitle } from 'reactstrap';

class News extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectedArticle: null
        }
    }
    onArticleSelect(article) {
        this.setState({ selectedArticle: article});
    }

    renderArticle(article) {
        if (article != null)
            return(
                <Card>
                    <CardImg top src={article.image} alt={article.name} />
                    <CardBody>
                      <CardTitle>{article.name}</CardTitle>
                      <CardText>{article.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const articles = this.props.articles.map((article) => {
            return (
              <div  className="col-12 col-md-4 ">
                <Card >
                  
                    <CardBody>
                        <CardImg width="100%" src={article.image} alt={article.name} />
                        <CardTitle>{article.name}</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button key={article.id}
                        onClick={() => this.onArticleSelect(article)} dark color="primary" >In Detail</Button>
                    </CardBody>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {articles}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderArticle(this.state.selectedArticle)}
                  </div>
                </div>
            </div>
        );
    }
}

export default News;