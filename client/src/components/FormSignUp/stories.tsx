import { StoryObj, Meta } from '@storybook/react'
import { FormSignUp } from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  args: {}
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
