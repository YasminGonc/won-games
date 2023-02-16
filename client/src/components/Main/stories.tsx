import { StoryObj, Meta } from '@storybook/react'
import { Main, MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta<MainProps>

export const Basic: StoryObj<MainProps> = {}
