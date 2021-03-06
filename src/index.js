import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    Provider
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {
    takeEvery,
    put
} from 'redux-saga/effects';
import axios from 'axios'


const imageList = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGE':
            return action.payload
        default:
            return state;
    }
}

const favoritesList = (state = [], action) => {
    if (action.type === 'SET_FAVS') {
        return action.payload;
    }
    return state;
}

const categoryList = (state = [], action) => {
    if (action.type === 'TYPE') {
        return action.payload;
    }
    // If action.type is anything else, it'll just return the last value of state.
    return state;
}



function* rootSaga() {
    yield takeEvery('FETCH_IMAGE', fetchImage)
    yield takeEvery('ADD_LIKED', addLiked);
    yield takeEvery('GET_FAVORITES', fetchFavorites);
    yield takeEvery('UPDATE_CATEGORY', updateCategory)
}

// ---------- GET Routes -----------------------
function* fetchImage(action) {
    try {
        const imageData = yield axios.get(`/api/giphy/${action.payload}`)
        yield put({
            type: 'SET_IMAGE',
            payload: imageData.data.data
        })
    } catch (error) {
        console.log('Error fetching image search', error);
    }
}

function* fetchCategories() {
    try {
        const categories = yield axios.get('/api/category')
        console.log('Getting categories from server is', categories.data);
        yield put({
            type: 'SET_CATEGORIES',
            payload: categories.data
        })
        console.log('Categories list from server', categories.data);

    } catch (error) {
        console.log('error setting categories:', error);

    }
}

function* updateCategory() {
    const catId = action.payload.category.id
    const favId = action.payload.image.id
    try {
        const updateCat = yield axios.put(`/api/category/${favId}`, {
            catId
        })
        yield put({
            type: 'GET_FAVORITES'
        });
    } catch (error) {
        console.log('Error updating categories', error)
    }
}


function* fetchFavorites() {
    try {
        const favsGET = yield axios.get('/api/favorite')
        console.log('GEt favorites from server is', favsGET.data);
        yield put({
            type: 'SET_FAVS',
            payload: favsGET.data
        })
        console.log('Favorite List from server', favsGET.data);

    } catch (error) {
        console.log('error setting favs :', error);

    }
}
// ---------- END GET Routes -------------------

function* addLiked(action) {
    try {
        yield axios.post('/api/favorite', action.payload);
        console.log('addLiked action is: ', action.payload);
        yield put({
            type: 'GET_FAVORITES'
        });
    } catch (error) {
        console.log('error posting liked image : ', error);
    }
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        //reducers go here
        imageList,
        favoritesList,
        categoryList
    }),
    // Here we add middleware to interact with code as it comes through
    applyMiddleware(
        sagaMiddleware, logger
    )
);

sagaMiddleware.run(rootSaga);




ReactDOM.render( <
        Provider store = {
            storeInstance
        } >
        <
        App / >
        <
        /Provider>, document.getElementById('root'));