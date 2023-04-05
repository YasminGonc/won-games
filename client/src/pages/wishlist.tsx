import { Wishlist, WishlistTemplateProps } from '../templates/Wishlist'

import GameCardSliderMock from '../components/GameCardSlider/mock'
import HighlighMock from '../components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: GameCardSliderMock,
      recomendedGames: GameCardSliderMock,
      recomendedHighlight: HighlighMock
    }
  }
}
