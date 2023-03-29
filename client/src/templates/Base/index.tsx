import { ReactNode } from 'react'
import * as S from './styles'

import { Container } from '../../components/Container'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'

export type BaseProps = {
  children: ReactNode
}

export function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
