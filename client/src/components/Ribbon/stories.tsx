import { StoryObj, Meta } from '@storybook/react'
import { Ribbon, RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<RibbonProps>

export const Default: StoryObj<RibbonProps> = {
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args}>Best Seller</Ribbon>
    </div>
  )
}
