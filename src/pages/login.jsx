import * as S from './login.js'
import { Navigate, Link } from 'react-router-dom'
import React from 'react'
import LogInLogo from '../img/logologin.svg'
export function LogIn(props) {
  function checkInputs() {
    const inputs = document.querySelectorAll('input')
    let flag = true
    inputs.forEach((element) => {
      console.log(element.value)
      if (element.value == '') flag = false
    })
    if (flag) props.checkLogIn()
  }
  return (
    <div style={{ backgroundColor: '#313131', height: '100vh' }}>
      <S.LogIn>
        <S.LogInDiv>
          <S.LogInLogo>
            <img src={LogInLogo} alt="logo" />
          </S.LogInLogo>
          <S.Login placeholder="Логин" />
          <S.Password placeholder="Пароль" />
          <Link to="/main">
            <LogInButton onClick={checkInputs} name="Войти" />
          </Link>
          <Link to="/register">
            <RegisterButton name="Зарегистрироваться" />
          </Link>
        </S.LogInDiv>
      </S.LogIn>
    </div>
  )
}

function LogInButton(props) {
  return <S.LogInButton onClick={props.onClick}>{props.name}</S.LogInButton>
}
function RegisterButton(props) {
  return <S.RegisterButton>{props.name}</S.RegisterButton>
}
