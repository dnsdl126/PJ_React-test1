const mongoose = require('mongoose')


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

//model : DB에서 데이터를 읽고, 생성하고, 수정하는 프로그래밍 인터페이스
//      : 스키마를 감싸는 역할 
const User = mongoose.model('User', userSchema)


module.exports = { User }