type Developers = {
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
