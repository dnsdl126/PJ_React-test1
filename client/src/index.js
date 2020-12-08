import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

//document.getElementById('root') 
// public에 있는 index.html에 있는 div id가 root 인 엘레멘트를  
// getElementById로 가지고 와서 
// index.html에 있는 div id가 root 인것에 정의할 것이
// <App/>라고 정의해준다 

//webpakc은 src 안에있는 폴더만 관리해주기때문에 img파일등을 넣을때는 src에 넣어줘야한다 

reportWebVitals();
