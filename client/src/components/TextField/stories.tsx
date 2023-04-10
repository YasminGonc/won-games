import { StoryObj, Meta } from '@storybook/react'
import { UserCircle } from 'phosphor-react'
import { TextField, TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    placeholder: 'Name',
    name: 'name',
    disabled: false
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta<TextFieldProps>

export const Default: StoryObj<TextFieldProps> = {}

export const withIcon: StoryObj<TextFieldProps> = {}

withIcon.args = {
  icon: <UserCircle />,
  iconPosition: 'left'
}

export const withError: StoryObj<TextFieldProps> = {}

withError.args = {
  icon: <UserCircle />,
  iconPosition: 'left',
  label: 'Name',
  error: 'Ops... Something is weird'
}
