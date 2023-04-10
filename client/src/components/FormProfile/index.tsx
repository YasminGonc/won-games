import Button from '../Button'
import { Heading } from '../Heading'
import { TextField } from '../TextField'
import * as S from './styles'

export function FormProfile() {
  return (
    <>
      <Heading bottomBorder color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField placeholder="Name" name="name" label="Name" />
        <TextField
          placeholder="E-mail"
          name="email"
          label="E-mail"
          type="email"
          value="johndoe@gmail.com"
          disabled
        />
        <TextField
          placeholder="Type your password"
          name="password"
          label="Password"
          type="password"
        />
        <TextField
          placeholder="New password"
          name="new_password"
          label="Password"
          type="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </>
  )
}
