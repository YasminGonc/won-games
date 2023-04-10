import { StoryObj, Meta } from '@storybook/react'
import { FormProfile } from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  args: {}
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 860, margin: 'auto' }}>
      <FormProfile />
    </div>
  )
}
