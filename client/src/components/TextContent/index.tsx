import * as S from './styles'

import { Heading } from '../Heading'

export type TextContentProps = {
  title?: string
  content: string
}
export function TextContent({ title, content }: TextContentProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading leftBorder lineColor="secondary" color="black">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}
