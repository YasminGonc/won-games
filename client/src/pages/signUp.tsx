import { Auth } from '../templates/Authentication'
import { FormSignUp } from '../components/FormSignUp'

export default function SignUp() {
  return (
    <Auth title="Sign up">
      <FormSignUp />
    </Auth>
  )
}
