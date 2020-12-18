import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'
import { USER_SERVER } from '../component/Config'


// redux 순서
//dispath가 action으로 정보를 보내면
// action이 reducer로 보내야한다 
export function loginUser(dataToSubmit) {
    //dataToSubmit === body(Email, password)

    //request라는 변수에 지정 
    const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
        .then(response => response.data)

    //return 을해서 reducer로 보내줘야한다 
    //reducer가 이전 state와 action을 조합해 nextsate르 만들어 store에 return해줘야하기 때문
    //action은 type과 response(payload)를 넣어서 보내줘야 한다 
    //type은 _actions폴더에 types어 정의해둔다
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {

    //get 메소드여서 dataToSubmit -> body 부분 필요가 없다
    const request = axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
