import * as S from './styles'

import { Heading } from '../Heading'
import { MediaMatch } from '../MediaMatch'
import { AppleLogo, LinuxLogo, WindowsLogo } from 'phosphor-react'

type Platform = 'windowns' | 'linux' | 'mac'

export type GameDetailsProps = {
  platforms: Platform[]
}

export function GameDetails({ platforms }: GameDetailsProps) {
  const platformIcons = {
    linux: <LinuxLogo weight="fill" size={18} />,
    mac: <AppleLogo weight="fill" size={18} />,
    windowns: <WindowsLogo weight="fill" size={18} />
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
          <S.Description>Gearbox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
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
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
