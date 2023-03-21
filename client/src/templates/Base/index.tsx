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
    <section>
      <Container>
        <Menu />
      </Container>

      {children}

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}
