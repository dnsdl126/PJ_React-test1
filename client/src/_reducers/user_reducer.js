import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types'


//reducer가 이전 state와 action을 조합해 nextsate르 만든다
//state = {}와 action 을조합 => nextstate
// 현제 state은 비어있기 때문에 state = {}
//action이 다양해지기 때문에 그때마다 type이 달라져서 다른 조치를 진행해줘야 한다

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            //nextstate를 return 해줘야한다
            //...state => state가 빈 state
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        default:
            return state;
    }
}