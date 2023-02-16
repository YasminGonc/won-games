import { ComponentProps } from 'react'
import * as S from './styles'

export function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.MainContainer>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frenre para uma tela com código."
      />
    </S.MainContainer>
  )
}

export type MainProps = ComponentProps<typeof Main>
