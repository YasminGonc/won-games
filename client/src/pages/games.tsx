import { GamesTemplate, GamesTemplateProps } from '@/templates/Games'

import { exploreSideBarMock } from '../components/ExploreSidebar/mock'
import gameCardMock from '../components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gameCardMock,
      filterItems: exploreSideBarMock.items
    }
  }
}
