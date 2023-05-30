import { Banner, Game, Highlight } from '@/@types/api'

export const bannerMapper = (banners: Banner[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button.label,
    buttonLink: banner.button.link,
    ribbon: banner.ribbon?.text || null,
    ribbonSize: banner.ribbon?.size || null,
    ribbonColor: banner.ribbon?.color || null
  }))
}

export const gamesMapper = (games: Game[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers[0].name,
      img: `http://localhost:1337${game.cover?.url}`,
      price: game.price
    }))
  )
}

export const highlightMapper = (highlight: Highlight | null | undefined) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}
