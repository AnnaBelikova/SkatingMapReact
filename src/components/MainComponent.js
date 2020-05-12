import React, { Component } from 'react';
import News from './NewsComponent';
import ArticleDetail from './ArticleDetailComponent';
import RouteDetail from './RouteDetailComponent';
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
import { addComment,fetchRoutes,fetchNews,fetchComments,loginUser,logoutUser,fetchUsers } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';



const mapStateToProps= state => {
    return {
        comments: state.comments,
        routes: state.routes,
        news:state.news,
        users:state.users,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) =>({
//    addComment: (routeId, rating, author, comment) => dispatch(addComment(routeId, rating, author, comment)),
    fetchRoutes: () => { dispatch(fetchRoutes())},
    fetchComments: () => { dispatch(fetchComments())},
    fetchUsers: () => { dispatch(fetchUsers())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchNews: () => {dispatch(fetchNews())},
    loginUser: (dataT) => dispatch(loginUser(dataT)),
    logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

    componentDidMount() {
    this.props.fetchRoutes();
    this.props.fetchNews();
    this.props.fetchComments();
    this.props.fetchUsers();
        
  }
   
  render() {
          
    const ArticleWithId = ({match}) => {
      return(
            <ArticleDetail article={this.props.news.news.filter((article) => article.id == parseInt(match.params.articleId,10))[0]}
                isLoading={this.props.news.isLoading}
                errMess={this.props.news.errMess}/>
      );
    };

 const RouteWithId = ({match}) => {
      return(
            <RouteDetail route={this.props.routes.routes.filter((route) => route.id == parseInt(match.params.routeId,10))[0]}
            isLoading={this.props.routes.isLoading}
            errMess={this.props.routes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.routeId == parseInt(match.params.routeId,10))} 
            isLoading={this.props.comments.isLoading}
            errMess={this.props.comments.errMess}/>
      );
};



const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.user!=null && this.props.auth.user.access ==='admin'
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
        <div>
            <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
            <div className='container'>
                <div className="row">
                    <div className="col-3 mb-5">
                        <div className="newslist">
                            <TabBox routes={this.props.routes.routes} articles={this.props.news.news} ></TabBox>
                        </div>
                    </div>
                    <Switch>
                          <Route path='/home' component={() => <Home/>} />
                          <Route exact path='/news' component={() => <News news={this.props.news.news} isLoading={this.props.news.isLoading}
                            errMess={this.props.news.errMess} />} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                            <Route exact path='/aboutus' component={About} />} />
                            <Route exact path='/routes' component={() => <Routes routes={this.props.routes.routes} isLoading={this.props.routes.isLoading}
                            errMess={this.props.routes.errMess}  />} />
                            <Route path="/news/:articleId" component={ArticleWithId} />
                            <Route path="/routes/:routeId" component={RouteWithId} />
                            <PrivateRoute exact path="/admin" component={() => <Admin users={this.props.users.users} isLoading={this.props.users.isLoading}
                            errMess={this.props.users.errMess}  />} />
                            <Redirect from='' to="/home" />
                            <Route exact path='*' component={NotFound} />} />
                          
                    </Switch>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));