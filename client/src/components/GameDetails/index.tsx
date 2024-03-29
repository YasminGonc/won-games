import * as S from './styles'

import { Heading } from '../Heading'
import { MediaMatch } from '../MediaMatch'
import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-react'

type Platform = 'windows' | 'linux' | 'mac'
type Rating = 'FREE' | 'pegi3' | 'pegi7' | 'pegi12' | 'pegi16' | 'pegi18'

export type GameDetailsProps = {
  developer: string
  publisher: string
  platforms: Platform[]
  realeaseDate: string
  rating: Rating
  genres: string[]
}

export function GameDetails({
  developer,
  publisher,
  platforms,
  realeaseDate,
  rating,
  genres
}: GameDetailsProps) {
  const platformIcons = {
    linux: <LinuxLogo weight="fill" size={18} aria-label="Linux" />,
    mac: <AppleLogo weight="fill" size={18} aria-label="Mac" />,
    windows: <WindowsLogo weight="fill" size={18} aria-label="Windowns" />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading leftBorder lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(realeaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'FREE' ? 'FREE' : `${rating.replace('pegi', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
