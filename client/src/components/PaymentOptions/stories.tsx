import { StoryObj, Meta } from '@storybook/react'
import { PaymentOption, PaymentOptionProps } from '.'

import { paymentOptionsMock } from './mock'

export default {
  title: 'PaymentOption',
  component: PaymentOption,
  args: {
    cards: paymentOptionsMock
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<PaymentOptionProps>

export const Default: StoryObj<PaymentOptionProps> = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <PaymentOption {...args} />
    </div>
  )
}
