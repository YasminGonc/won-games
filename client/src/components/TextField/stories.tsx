import { StoryObj, Meta } from '@storybook/react'
import { UserCircle } from 'phosphor-react'
import { TextField, TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    placeholder: 'Name'
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta<TextFieldProps>

export const Default: StoryObj<TextFieldProps> = {}

export const WithIcon: StoryObj<TextFieldProps> = {}

WithIcon.args = {
  icon: <UserCircle />
}
