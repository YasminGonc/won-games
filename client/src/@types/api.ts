type Developers = {
  name: string
}

type Rating = 'FREE' | 'pegi3' | 'pegi7' | 'pegi12' | 'pegi16' | 'pegi18'

type Platforms = {
  name: string
}

type Categories = {
  name: string
}

type Gallery = {
  src: string
  label: string
}

type Game = {
  name: string
  slug: string
  cover?: {
    url: string
  }
  developers: Developers[]
  price: number
}

export type QueryGames = {
  games: Game[]
}

type QueryGameBySlug = {
  name: string
  short_description: string
  description: string
  price: number
  rating?: Rating
  realease_date?: Date
  gallery: Gallery[]
  cover?: {
    src: string
  }
  developers: Developers[]
  publisher: {
    name: string
  }
  categories: Categories[]
  platforms: Platforms[]
}

export type QueryGamesBySlug = {
  games: QueryGameBySlug[]
}

type Banner = {
  image?: {
    url: string
  }
  title: string
  subtitle: string
  button: {
    label: string
    link: string
  }
  ribbon?: {
    text: string
    color: 'primary' | 'secondary'
    size: 'small' | 'normal'
  }
}

type Highlight = {
  title: string
  subtitle: string
  background: {
    url: string
  }
  floatImage?: {
    url: string
  }
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

type HomeSection = {
  title: string
  highlight: Highlight
}

export type QueryHome = {
  banners: Banner[]
  newGames: Game[]
  upcomingGames: Game[]
  freeGames: Game[]
  sections: {
    newGames: HomeSection
    popularGames: {
      title: string
      highlight: Highlight
      games: Game[]
    }
    upcomingGames: HomeSection
    freeGames: HomeSection
  }
}
