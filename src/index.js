import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'


const imageList = (state = [], action =>{
    switch(action.type){
        case 'SET_IMAGE':
        return action.payload
        default:
            return state;
    }
})
function * rootSaga(){
    yield takeEvery('FETCH_IMAGE', fetchImage)
    
}

// ---------- GET Routes -----------------------
function* fetchImage(){
    const imageData = yield axios.get('/image')
    
}
// ---------- END GET Routes -------------------





const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        //reducers go here
        imageList
    }),
    // Here we add middleware to interact with code as it comes through
    applyMiddleWare(
        sagaMiddleware
        , logger
    ),
);

sagaMiddleware.run(rootSaga);




ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
