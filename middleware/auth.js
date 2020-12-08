const { User } = require('../MongoDB/User')

let auth = (req, res, next) => {

    // 인증처리를 하는곳


    //1. 클라이너트 쿠키에서 token을 가지고 온다
    let token = req.cookies.x_auth;
    //2. token을 복호화 한후 user를 찾는다
    //user model의 메소드를 찾는다
    // 1. user model가지고 온다
    //const { User } = require('./Mongodb/User')
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })

        //reqest에 token과 user를 넣어주는 것은
        // idnex.js 에서도 user정보와 token을 사용할수있도록 해주는 것 

        req.token = token;
        req.user = user;
        next();
    })

    // 3. 유저가 있으면 인증 okay

    // 4. 유저가 없으면 인증 no
}


module.exports = { auth };