import { StoryObj, Meta } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    hasRibbon: false,
    ribbon: 'My Ribbon',
    ribbonSize: 'normal'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<BannerProps>

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

WithRibbon.args = {
  hasRibbon: true
}
