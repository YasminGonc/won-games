import { ExploreSideBarProps } from '.'

export const exploreSideBarMock: Pick<ExploreSideBarProps, 'items'> = {
  items: [
    {
      title: 'Price',
      type: 'checkbox',
      fields: [
        'Under $50',
        'Under $100',
        'Under $150',
        'Under $200',
        'Free',
        'Discouted'
      ]
    },
    {
      title: 'Sort by',
      name: 'sort_by',
      type: 'radio',
      fields: ['High to low', 'Low to high']
    },
    {
      title: 'System',
      type: 'checkbox',
      fields: ['Windows', 'Linux', 'MAC']
    },
    {
      title: 'Genre',
      type: 'checkbox',
      fields: ['Action', 'Adventure', 'Simulation']
    }
  ]
}
