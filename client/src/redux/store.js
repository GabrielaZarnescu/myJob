import {authReducer, userReducer} from '../reducers/authReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {getPostDetailsReducer, getPostsReducer } from '../reducers/postsReducer';

const reducer=combineReducers({
    getPosts:getPostsReducer,
    getPostDetails:getPostDetailsReducer,
    userLogin:userReducer
})

const middleware=[thunk];
//user
const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData'))
: null;

const INITIAL_STATE = {
    userLogin: {userInfo: userAuthFromStorage}
};

const store = createStore (
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;