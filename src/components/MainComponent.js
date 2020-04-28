import React, { Component } from 'react';
import News from './NewsComponent';
import ArticleDetail from './ArticleDetailComponent';
import RouteDetail from './RouteDetailComponent';
//import { NEWS } from '../shared/news';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import TabBox from './TabBoxComponent';
import Routes from './RoutesComponent';
import Admin from './AdminComponent';
import NotFound from './NotFoundComponent';
import axios from "axios";

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps= state => {
    return {
        comments: state.comments,
        routes: state.routes
    }
}


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        articles: [],
    };
  }

    
   componentWillMount() {
    axios
      .get("http://cw44189.tmweb.ru/news.php")
      .then(({ data }) => {
        this.setState({
          articles: data
        });
      });
  } 
    
   
  render() {
          
    const ArticleWithId = ({match}) => {
      return(
            <ArticleDetail article={this.state.articles.filter((article) => article.id === parseInt(match.params.articleId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.articleId === parseInt(match.params.articleId,10))} />
      );
    };

 const RouteWithId = ({match}) => {
      return(
            <RouteDetail route={this.props.routes.filter((route) => route.id === parseInt(match.params.routeId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.routeId === parseInt(match.params.routeId,10))} />
      );
};
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="row">
        
                    <Switch>
                          <Route path='/home' component={() => <Home/>} />
                          <Route exact path='/news' component={() => <News articles={this.state.articles} />} />
                            <Route exact path='/contactus' component={Contact} />} />
                            <Route exact path='/aboutus' component={About} />} />
                            <Route exact path='/routes' component={() => <Routes routes={this.props.routes} />} />
                            <Route path="/news/:articleId" component={ArticleWithId} />
                            <Route path="/routes/:routeId" component={RouteWithId} />
                            <Route exact path='/admin' component={Admin} />} />
                            <Redirect from='' to="/home" />
                            <Route exact path='*' component={NotFound} />} />
                          
                    </Switch>
                    <div className="col-3 mb-5">
                        <div className="newslist">
                            <TabBox routes={this.props.routes} articles={this.state.articles} ></TabBox>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));