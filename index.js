// index.js backend 시작점
// npm install express
// node_modules 폴더 생성 : install한 dependencies들을 관리하는 폴더 
// 1. express js 설치 
// express js : HTTP 통신 요청(request, get, post 등)에대한 핸들러를 만들수 잇음
//            : Node 웹 프레임 워크
const express = require('express')
const app = express()
const port = 4000


// 2. mongoDB 설치
// npm intstall mongoose
//require 외부 모듈을 가져올수 있게 하는 메서드
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test1:bear7464*@cluster0.j7rgu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..')).catch(err => console.log(err));


app.get('/', (req, res) => {
    //req, res는 node가 제공 해준다 
    //http://localhost:4000/ 접속시 
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})