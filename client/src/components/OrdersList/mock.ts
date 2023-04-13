import { OrdersListProps } from '.'

export const ordersListMock: OrdersListProps = {
  items: [
    {
      img: 'https://source.unsplash.com/user/willianjusten/151x70',
      title: 'Red Dead Redemption 2',
      price: '$ 215,00',
      downloadLink: 'https://wongames.com/game/download/1',
      paymentInfo: {
        flag: 'mastercard',
        img: '/img/mastercard.png',
        number: '**** **** **** 4326',
        purchaseDate: 'Purchase made on 07/20/2022 at 20:23'
      }
    },
    {
      img: 'https://source.unsplash.com/user/willianjusten/151x71',
      title: 'Red Dead Redemption 2',
      price: '$ 215,00',
      downloadLink: 'https://wongames.com/game/download/2',
      paymentInfo: {
        flag: 'visa',
        img: '/img/visa.png',
        number: '**** **** **** 5423',
        purchaseDate: 'Purchase made on 07/20/2022 at 20:00'
      }
    }
  ]
}
