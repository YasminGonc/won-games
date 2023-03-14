import { StoryObj, Meta } from '@storybook/react'
import { FormSignIn } from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  args: {}
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}
