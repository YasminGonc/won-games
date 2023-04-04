import Link from 'next/link'
import * as S from './styles'
import Button from '../Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export function Empty({ title, description, hasLink }: EmptyProps) {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref legacyBehavior>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  )
}
