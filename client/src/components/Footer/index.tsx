import Link from 'next/link'
import * as S from './styles'

import { Heading } from '../Heading'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        <S.Column aria-labelledby="footer contact">
          <Heading
            color="black"
            size="small"
            lineColor="secondary"
            bottomBorder
          >
            Contact
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            size="small"
            lineColor="secondary"
            bottomBorder
          >
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              YouTube
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            size="small"
            lineColor="secondary"
            bottomBorder
          >
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Loja</Link>
            <Link href="/games">Store</Link>
            <Link href="/search">Buscar</Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer location">
          <Heading
            color="black"
            size="small"
            lineColor="secondary"
            bottomBorder
          >
            Location
          </Heading>

          <span>Rua 7 de Maio</span>
          <span>527 - 89.020-330</span>
          <span>Rio de Janeiro, Brasil</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2023 © Todos os Direitos Reservados</S.Copyright>
    </S.Wrapper>
  )
}
