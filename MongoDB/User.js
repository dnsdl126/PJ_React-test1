const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//salt를 이용해 비밀번호를 암호화
//1. saltRounds가 몇글자인지 설정
//2. salt 생성
//3. salt 이용해 암호화
const saltRounds = 10

//Schema 
// MongoDB는 테이블이 없기 때문에 같은 필드인데 다른 자료형이 들어갈수도 있다
// Schema는 사용자가 작성한 스키마 기준으로 데이터를 DB에 넣기 전에 검사하는 역할을한다
// Schema에 어긋나는 데이터가 있으면 에러를 발생 시킨다 
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next) {
    // mongoose 메서드
    // usermodel에 user정보를 하기전에 실행한다
    // index.js에서
    // user.save((err, userInfo) => { }
    // 이부분 실행하기전 function을 줘서 무엇인가 진행함 

    var user = this;
    //idex.js에서
    // const user = new User(req.body)로 
    // req.body를 user model에 입력해뒀기 때문에
    //  var user =this; 를 입력하면
    // this 는 위에 입력한 user 를 가리키는 것이다    

    // password 변경시에만 아래 salt 작업이 되도록 
    // 아래 if문을 진행해두지 않으면 비밀번호 변경작업이 아니라
    // email, 이름 수정시에도 아래 작업이 들어간다
    if (user.isModified('password')) {
        // 비밀번호를 암호화 시킨다
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)
            // err가 나면 
            // idnex.js에
            // user.save((err, userInfo) => {        
            // if (err) return res.json({ success: false, err}) 로 이동
            bcrypt.hash(user.password, salt, function (err, hash) {
                //user.password는 client가 입력한 비밀번호
                //index.js에서 req.bodt를 user model에 담아줬기때문에
                //this.password는 client가 입력한 비밀번호값을 가지고 올수있음
                if (err) return next(err)
                // err 발생시 return 하여 다시 user.save로 돌려보낸다
                user.password = hash
                // 성공시 password를 hash된 비밀번호로 변경 
                next();
                //user.save로 돌아간다
            })
        })
    }
})

//model : DB에서 데이터를 읽고, 생성하고, 수정하는 프로그래밍 인터페이스
//      : 스키마를 감싸는 역할 
const User = mongoose.model('User', userSchema)

//export
module.exports = { User }