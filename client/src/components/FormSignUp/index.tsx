import Link from 'next/link'
import { UserCircle, EnvelopeSimple, LockSimple } from 'phosphor-react'

import Button from '../Button'
import { TextField } from '../TextField'
import { FormLink, FormWrapper } from '../FormWrapper'

export function FormSignUp() {
  return (
    <FormWrapper>
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

        <FormLink>
          Already have an account?
          <Link href="/signIn">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
