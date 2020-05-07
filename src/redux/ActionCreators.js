import * as ActionTypes from'./ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import axios from "axios";

//export const addComment = (routeId, rating, author, comment) => ({
//   type:ActionTypes.ADD_COMMENT,
//    payload:{
//        routeId: routeId,
//        rating: rating,
//        author:author,
//        comment:comment
//    }
//});

export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading());
    return fetch(baseUrl + 'comments.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
//      error => {
//            var errmess = new Error(error.message);
//            throw errmess;
//      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => console.error('Error: ', error))
}

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
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
      })
//      error => {
//            let errmess = new Error(error.message);
//            throw errmess;
//      })
    .then(response => response.json())
    .then(routes => dispatch(addRoutes(routes)))
    .catch(error => console.error('Error: ', error))
    
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
      })
//      error => {
//            var errmess = new Error(error.message);
//            throw errmess;
//      })
    .then(response => response.json())
    .then(news => dispatch(addNews(news)))
    .catch(error => console.error('Error: ', error));
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





export const fetchUsers = () => (dispatch) => {
    dispatch(usersLoading());
    return fetch(baseUrl + 'users.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      })
//      error => {
//            throw error;
//      })
    .then(response => response.json())
    .then(users => dispatch(addUsers(users)))
    .catch(error => console.error('Error: ', error));
}

export const usersLoading = () => ({
    type: ActionTypes.USERS_LOADING
});

export const usersFailed = (errmess) => ({
    type: ActionTypes.USERS_FAILED,
    payload: errmess
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});








export const requestLogin = (dataT) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        dataT
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        data: response.data
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (dataT) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(dataT))
    return axios({
            method: 'post',
            url: 'http://cw44189.tmweb.ru/auth.php',
            data: JSON.parse(JSON.stringify(dataT)),
            config: { headers: {'Content-Type': 'application/json' }}
        })
        .then(function (response) {
        let newinfo=JSON.parse(JSON.stringify(response.data));
            if (newinfo.user_id) {
                localStorage.setItem('info', JSON.stringify(response.data));
                dispatch(receiveLogin(response));
            } else {
                var error = new Error('Неверные данные!');
                error.response = response;
                throw error;
            }
            },
            error => {
                throw error;
            })
        .catch(error => dispatch(loginError(error.message)));
};    

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('info');
    dispatch(receiveLogout())
}