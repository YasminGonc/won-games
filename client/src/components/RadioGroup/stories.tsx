import { StoryObj, Meta } from '@storybook/react'
import { RadioGroup, RadioGroupProps } from '.'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  args: {
    items: ['Cat', 'Dog', 'Fish']
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<RadioGroupProps>

export const Default: StoryObj<RadioGroupProps> = {}
