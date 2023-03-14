import Link from 'next/link'
import { EnvelopeSimple, LockSimple } from 'phosphor-react'

import Button from '../Button'
import { TextField } from '../TextField'

import * as S from './styles'
import { FormLink, FormWrapper } from '../FormWrapper'

export function FormSignIn() {
  return (
    <FormWrapper>
      <form>
        <TextField
          placeholder="Email"
          name="email"
          type="email"
          icon={<EnvelopeSimple />}
        />

        <TextField
          placeholder="Password"
          name="password"
          type="password"
          icon={<LockSimple />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button size="large" fullWidth>
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account?
          <Link href="/signUp">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
