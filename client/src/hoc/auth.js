
import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';



export default function (SpecificComponent, option, adminRoute = null) {
    //SpecificComponent == reding page
    // action == > null(아무나 출입가능), fasle(로그인한 유저는 출입 불가능), true(로그인한 유저는 출입 가능 )

    function AuthenticationCheck(props) {

        //baeckend에 request를 보내서 현제의 상태를 확인한다
        const dispatch = useDispatch();
        useEffect(() => {

            //redux 사용
            //actions file에 user_action -> reducer -> type 순으로 진행 
            dispatch(auth()).then(response => {
                console.log(response)
                //로그인페이지를 가는데 로그인한 사람이면
                // auth 부분에서 막아준다 이런식으로 막아주는 분기 처리 필요
                // 로그인 하지 않은 상태

                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    // 로그인 한 상태
                    // history :
                    // 리액트에서 페이지를 이동할수 있는 이유는  react-router-dom을 이용하여 페이지의 기록을 
                    // 알수있기 때문

                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (option === false)
                            props.history.push('/')
                    }
                }

            })
        }, [])
        return (
            <SpecificComponent />
        )
    }



    // auth안에 다른 component들이 오도록
    // App.js 에서 감싸준다 
    // <Route exact path="/login" component={Auth(LoginPage)} />

    return AuthenticationCheck
}