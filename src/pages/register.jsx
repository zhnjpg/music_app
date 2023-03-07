import * as S from './register.js'
import { Navigate } from 'react-router-dom'
import React from 'react'
import LogInLogo from '../img/logologin.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export function Register(props) {
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
      <S.Register>
        <S.RegisterDiv>
          <S.LogInLogo>
            <img src={LogInLogo} alt="logo" />
          </S.LogInLogo>
          <S.Login placeholder="Логин" />
          <S.Password placeholder="Пароль" />
          <S.RepeatPassword placeholder="Повторите пароль" />
          <Link to="/main">
            <RegisterButton name="Зарегистрироваться" onClick={checkInputs} />
          </Link>
        </S.RegisterDiv>
      </S.Register>
    </div>
  )
}

function RegisterButton(props) {
  return (
    <S.RegisterButton onClick={props.onClick}>{props.name}</S.RegisterButton>
  )
}
