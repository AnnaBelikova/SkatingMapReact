import React, { Component } from 'react';
import News from './NewsComponent';
import ArticleDetail from './ArticleDetailComponent';
import RouteDetail from './RouteDetailComponent';
import { NEWS } from '../shared/news';
import { COMMENTS } from '../shared/comments';
import { ROUTES } from '../shared/routes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import TabBox from './TabBoxComponent';
import Routes from './RoutesComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        articles: NEWS,
        comments: COMMENTS,
        routes: ROUTES,
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

 const RouteWithId = ({match}) => {
      return(
            <RouteDetail route={this.state.routes.filter((route) => route.id === parseInt(match.params.routeId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.routeId === parseInt(match.params.routeId,10))} />
      );
};
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="row">
        
                    <Switch>
                          <Route path='/home' component={HomePage} />
                          <Route exact path='/news' component={() => <News articles={this.state.articles} />} />
                            <Route exact path='/contactus' component={Contact} />} />
                            <Route exact path='/aboutus' component={About} />} />
                            <Route exact path='/routes' component={() => <Routes routes={this.state.routes} />} />
                            <Route path="/news/:articleId" component={ArticleWithId} />
                            <Route path="/routes/:routeId" component={RouteWithId} />
                          <Redirect to="/home" />
                    </Switch>
                    <div className="col-3">
                        <div className="newslist">
                            <TabBox routes={this.state.routes} articles={this.state.articles} ></TabBox>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Main;