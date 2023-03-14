import { Auth } from '../templates/Authentication'
import { FormSignIn } from '../components/FormSignIn'

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  )
}
