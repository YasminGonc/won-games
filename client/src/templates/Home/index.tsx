import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Heading } from '../../components/Heading'
import { Menu } from '../../components/Menu'

import * as S from './styles'

export function Home() {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary" color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Free games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </S.Wrapper>
  )
}
