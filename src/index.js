import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
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
            return [...state, action.payload];
        }
        return state;
}



function* rootSaga() {
    yield takeEvery('FETCH_IMAGE', fetchImage)
    yield takeEvery('ADD_LIKED', addLiked);
    yield takeEvery('GET_FAVORITES', fetchFavorites);
}

// ---------- GET Routes -----------------------
function* fetchImage(action) {
    try {
        const imageData = yield axios.get(`/api/giphy/${action.payload}`)
        yield put({ type: 'SET_IMAGE', payload: imageData.data.data })
    } catch (error) {
        console.log('Error fetching image search', error);
    }
}


function* fetchFavorites() {
    try{
        const favsGET = yield axios.get('/api/favorite')
        yield put ({type: 'SET_FAVS', payload: favsGET})
        
    } catch(error) {
        console.log('error setting favs :', error);
        
    }
}
// ---------- END GET Routes -------------------

function* addLiked(action) {
    try{
        yield axios.post('/api/favorite', action.payload);
        console.log('addLiked action is: ', action.payload);
        // yield put({type: 'ADD_LIKED'})
    } catch (error) {
        console.log('error posting liked image : ', error);
    }
}





const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        //reducers go here
        imageList,
        favoritesList

    }),
    // Here we add middleware to interact with code as it comes through
    applyMiddleware(
        sagaMiddleware
        , logger
    )
);

sagaMiddleware.run(rootSaga);




ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
