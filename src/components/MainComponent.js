import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import News from './NewsComponent';
import ArticleDetail from './ArticleDetailComponent';
import { NEWS } from '../shared/news';
import { COMMENTS } from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        articles: NEWS,
        comments: COMMENTS,
    };
  }


  render() {
      const HomePage = () => {
      return(
            <Home 
              article={this.state.articles.filter((article) => article.featured)[0]}/>
      );
    }
          
    const ArticleWithId = ({match}) => {
      return(
            <ArticleDetail article={this.state.articles.filter((article) => article.id === parseInt(match.params.articleId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.articleId === parseInt(match.params.articleId,10))} />
      );
    };
    return (
        <div>
            <Header />
                <Switch>
                      <Route path='/home' component={HomePage} />
                      <Route exact path='/news' component={() => <News articles={this.state.articles} />} />
                        <Route exact path='/contactus' component={Contact} />} />
                        <Route exact path='/aboutus' component={About} />} />
                        <Route path="/news/:articleId" component={ArticleWithId} />
                      <Redirect to="/home" />
                </Switch>
            
            <Footer />
        </div>
    );
  }
}

export default Main;