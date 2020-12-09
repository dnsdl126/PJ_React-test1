import { combineReducers } from 'redux';
//import user from './user_reducer';

//combineReducers
//스토어에 reducer 가 여러개가 있을수 있는데
// 리듀서 안에서 하는일이 어떻게 state가 변하는지 보여준다음
// 변화의 마지막값을 return해주는 것이 reducer 역할
// state도 여러가지가 있을수 있기 때문에 reducer 도 나눠 있다
// combineReducer을 리덕스에서 가져와서 root reducer에서 하나로
// 합춰주도록 한다 
// 인증이나 comment에 관한 reducer 을 만들었다고 하면
// 이걸 하나로 묶어서 쓸수 있게한다
const rootReducer = combineReducers({
    // user
})

export default rootReducer;