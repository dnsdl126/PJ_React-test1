if (process.env.Node_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}

// local인지 배포 모드 인지에 따라 
// 숨겨야 되는 정보 (DB 정보를 ) 불러오는 폴더를 분류