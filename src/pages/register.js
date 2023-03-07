import styled, { createGlobalStyle } from 'styled-components'

export const Register = styled.div`
  display: flex;
  justify-content: center;
`

export const RegisterDiv = styled.div`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogInLogo = styled.div`
  margin-top: 43px;
`
export const Login = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  margin-top: 42px;
  outline: none;
  width: 278px;
  ::placeholder {
    color: #e1e1e1;
  }
`
export const Password = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  margin-top: 38px;
  outline: none;
  width: 278px;
  ::placeholder {
    color: #e1e1e1;
  }
`
export const RepeatPassword = styled.input`
  border: none;
  border-bottom: 1px solid #d0cece;
  margin-top: 38px;
  outline: none;
  width: 278px;
  ::placeholder {
    color: #e1e1e1;
  }
`
export const RegisterButton = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  color: #ffffff;
  border-radius: 6px;
  border: 1px solid #d0cece;
  margin-top: 60px;
`
