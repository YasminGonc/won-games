import { ReactNode } from 'react'
import * as S from './styles'

import { Logo } from '../../components/Logo'
import { Heading } from '../../components/Heading'
import Link from 'next/link'

type AuthProps = {
  title: string
  children: ReactNode
}

export function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <Logo id="banner" />
          </Link>

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2023 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <Logo color="black" size="large" id="content" />
          </Link>
          <Heading color="black" leftBorder lineColor="secondary">
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
