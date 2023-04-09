import { StoryObj, Meta } from '@storybook/react'
import { PaymentOption, PaymentOptionProps } from '.'

import { paymentOptionsMock } from './mock'

export default {
  title: 'PaymentOption',
  component: PaymentOption,
  args: {
    cards: paymentOptionsMock
  }
} as Meta<PaymentOptionProps>

export const Default: StoryObj<PaymentOptionProps> = {}
