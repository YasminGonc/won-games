import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import * as S from './styles'

import { Base } from '../Base'

import { Container } from '../../components/Container'
import { Heading } from '../../components/Heading'
import { ProfileMenu } from '../../components/ProfileMenu'

export type ProfileTemplateProps = {
  children: ReactNode
}

export function Profile({ children }: ProfileTemplateProps) {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading leftBorder lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}
