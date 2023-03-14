import Link from 'next/link'
import { EnvelopeSimple, LockSimple } from 'phosphor-react'

import { Button } from '../Button'
import { TextField } from '../TextField'

import * as S from './styles'

export function FormSignIn() {
  return (
    <S.Wrapper>
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

        <S.FormLink>
          Don’t have an account?
          <Link href="/SignUp">Sign up</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
