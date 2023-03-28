import { StoryObj, Meta } from '@storybook/react'
import { Gallery, GalleryProps } from '.'
import { GalleryMock } from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items: GalleryMock
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<GalleryProps>

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  )
}
