import { StoryObj, Meta } from '@storybook/react'
import { BannerSlider, BannerSliderProps } from '.'
import items from './mock'

export default {
  title: 'Banner Slider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<BannerSliderProps>

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
