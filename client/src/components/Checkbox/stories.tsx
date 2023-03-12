import { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Under $50',
    labelFor: 'check',
    labelColor: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
