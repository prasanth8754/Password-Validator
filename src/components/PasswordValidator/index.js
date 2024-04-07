import {useState} from 'react'

import {BgCont, Form, Heading, Input, MainHeading} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const isValidPassword = password.length >= 8

  return (
    <BgCont>
      <Form>
        <MainHeading>Password Validator</MainHeading>
        <Heading para>Check how strong and secure is your password</Heading>
        <Input value={password} type="password" onChange={onChangePassword} />
        {isValidPassword === false && (
          <Heading>Your password must be at least 8 characters</Heading>
        )}
      </Form>
    </BgCont>
  )
}

export default PasswordValidator
