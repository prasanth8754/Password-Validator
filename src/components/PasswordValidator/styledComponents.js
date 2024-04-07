import styled from 'styled-components'

// {BgCont, Form, Heading, Input,MainHeading}

export const BgCont = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Form = styled.form`
  background-color: #383a4e;
  width: 90%;
  align-self: center;
  border-radius: 15px;
  box-shadow: 0px 4px 16px 0px #434451;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 35%;
    padding: 30px;
  }
`
export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  font-family: 'Roboto';
`
export const Heading = styled.p`
    
    color:${props => {
      if (props.para) {
        return `#f8fafc`
      }
      return `#ef4444`
    }};
    font-size:${props => {
      if (props.para) {
        return `18px`
      }
      return `15px`
    }};
    text-align-center;
`
export const Input = styled.input`
  border: 0px;
  outline: none;
  width: 100%;
  height: 40px;
  background-color: #edeeff;
  padding-left: 20px;
`
