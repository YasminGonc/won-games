import { TextField } from '../TextField'
import { UserCircle, EnvelopeSimple, LockSimple } from 'phosphor-react'

import * as S from './styles'
import { Button } from '../Button'
import Link from 'next/link'

export function FormSignUp() {
  return (
    <S.Wrapper>
      <form>
        <TextField
          placeholder="Name"
          name="name"
          type="text"
          icon={<UserCircle />}
        />

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

        <TextField
          placeholder="Confirm password"
          name="confirm password"
          type="password"
          icon={<LockSimple />}
        />

        <Button size="large" fullWidth>
          Sign up now
        </Button>

        <S.FormLink>
          Already have an account?
          <Link href="/SignIn">Sign in</Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
