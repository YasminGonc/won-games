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

type Game = {
  name: string
  slug: string
  cover: {
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
  gallery: {
    src: string
    label: string
  }
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
