import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';

function LoginPage() {
    const dispatch = useDispatch();


    // 로직
    // 타이핑 할때 state을 변경하면 ->input 태그의 value가 바뀐다
    // 1.  타이핑을 한다 
    // 2. onchange라는 이벤트를 발생해서 state를 변경하고
    // 3. state이 변경되면 value가 변경 


    // loginpage 내에서 데이터를 입력 받으려면 state을 사용해야 한다
    // useState("") -> 처음에 ("") 빈칸으로 띄우겠다는 의미
    //useState 리액트 라이브러리에서 가지고 올수있다
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //아무작업 없이도 refresh가 되지 않도록 방지
        event.preventDefault();

        //client가 server에 데이터를 보내야하는데 
        // 이데이터를 const [Email, setEmail] = useState("")가 담고 있다

        //서버에 데이터를 보낼때는 Axios를 사용해야 되는데 
        //Axios.post('/api/user/login', (보낼데이터) )
        //Axios.post('/api/user/login', body ).then(response => { })


        let body = {
            email: Email,
            password: Password
        }

        // 리덕스를 사용중이기 때문에 조금더 복잡함
        // dispatch를 이용해 action을 취하고 reducer로 가는 순서 
        // const dispatch = useDispatch();
        // loginUser -> action이름
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error˝')
                }
            })


    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
