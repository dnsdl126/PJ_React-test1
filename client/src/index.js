import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

// 원래는 createStore만 해도 되지만 
//redux 미들웨어를 이용해서
// promis와 function 형태의 데이터도 받을수 있기때문에
// 그에대한 설정 
// applyMiddleware 를 작성하면 redux에서 가지고 와진다 

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <App />
    </Provider>
    , document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));

//document.getElementById('root') 
// public에 있는 index.html에 있는 div id가 root 인 엘레멘트를  
// getElementById로 가지고 와서 
// index.html에 있는 div id가 root 인것에 정의할 것이
// <App/>라고 정의해준다 

//webpakc은 src 안에있는 폴더만 관리해주기때문에 img파일등을 넣을때는 src에 넣어줘야한다 

reportWebVitals();
