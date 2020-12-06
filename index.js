// index.js backend 시작점
// npm install express
// node_modules 폴더 생성 : install한 dependencies들을 관리하는 폴더 
// 1. express js 설치 
// express js : HTTP 통신 요청(request, get, post 등)에대한 핸들러를 만들수 잇음
//            : Node 웹 프레임 워크
const express = require('express')
const app = express()
const port = 4000
const { User } = require("./MongoDB/User");
const bodyparser = require('body-parser');

//body parser 가 client에서 오는 정보를 
// 서버에서 분석해서 가지고 올수 있게 해주는데
// aplication/x-www-form-urlencded 형식으로 된 데이터를 가지고 올수잇게
app.use(bodyparser.urlencoded({ extended: true }));
// body parser 가
// applictation/json (json)형식으로 데이터된것을 가지고 올수 있게
app.use(bodyparser.json());


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
    res.send('무덕이가  최고 ')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


// 3. body-parser :
// client 가 request를 server에 보내면 데이터를 분석해 req.body로 출력하는 역할

// 4. Post man
// 로그인하거나 회원가입할때 현재로는 만들어진 client가 없으므로
// 대처할수 있는 API
// 검색해서 받을수 있음
// post 나 get 방식으로 데이터를 보낼수있음
app.post('/register', (req, res) => {
    // 회원가입할때 필요한 정보들을 client 에서 가지고 오면
    // 이데이터를 DB에 넣어주준다

    const user = new User(req.body)
    // MongoDB폴더에 만들어진 user 입력할 정보
    // 상단에 const { User } = require("./MongoDB/User")
    // 로 연동해둠
    // req.body 안에는 
    // json 형식으로 된 회원 정보
    // { id : " mooming" ,
    //   password : "1234"
    // }
    // 와같은 정보가 담겨 있다
    // 이렇게  req.body에 정보를 담을수 있는것은 body-parser가 있기 때문

    user.save((err, userInfo) => {
        //user.save() mongo db 메서드
        if (err) return res.json({
            success: false, err
        })
        // err가 발생하면 json 형식으로 false 와 err메세지 client에 반환

        return res.status(200).json({
            success: true
        })
        // res.status(200) => 성공하면 true 반환 

    })

    // 5. node mon
    // 원래는 node 서버를 킨후 무언가 바뀐 내용이 있다면
    // 서버를 새로 열어야지 바뀐 부분이 반영이 되는데
    // node mon은 닫고 새로열지 않아도 바뀐부분이 반영이 되도록 해준다
    // npm install nodemon --save-dev
    // dev 는 local에서만 사용하겠다는 의미
    // 설치후 package.json에 
    // "backend" : "nodemon index.js"를 추가
    // node 몬을 이용해 index.js를 기동하겠다는 의미


})

