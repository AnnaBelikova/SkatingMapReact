import * as ActionTypes from'./ActionTypes';
import { ROUTES } from '../shared/routes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (routeId, rating, author, comment) => ({
   type:ActionTypes.ADD_COMMENT,
    payload:{
        routeId: routeId,
        rating: rating,
        author:author,
        comment:comment
    }
});




export const fetchRoutes = () => (dispatch) => {
    dispatch(routesLoading());
    return fetch(baseUrl + 'routes.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(routes => dispatch(addRoutes(routes)));
}

export const routesLoading = () => ({
    type: ActionTypes.ROUTES_LOADING
});

export const routesFailed = (errmess) => ({
    type: ActionTypes.ROUTES_FAILED,
    payload: errmess
});

export const addRoutes = (routes) => ({
    type: ActionTypes.ADD_ROUTES,
    payload: routes
});



export const fetchNews = () => (dispatch) => {
    dispatch(newsLoading());
    return fetch(baseUrl + 'news.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(news => dispatch(addNews(news)));
}

export const newsLoading = () => ({
    type: ActionTypes.NEWS_LOADING
});

export const newsFailed = (errmess) => ({
    type: ActionTypes.NEWS_FAILED,
    payload: errmess
});

export const addNews = (news) => ({
    type: ActionTypes.ADD_NEWS,
    payload: news
});