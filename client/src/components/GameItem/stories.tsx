import { StoryObj, Meta } from '@storybook/react'
import { GameItem, GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: '$ 215,00'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<GameItemProps>

export const Default: StoryObj<GameItemProps> = {}

export const WithPayment: StoryObj<GameItemProps> = {}

WithPayment.args = {
  downloadLink: 'https://link',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/mastercard.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2022 at 20:32'
  }
}
