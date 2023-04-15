import Button from '../Button'
import { Checkbox } from '../Checkbox'
import { Heading } from '../Heading'
import { RadioGroup } from '../RadioGroup'
import * as S from './styles'

type ItemProps = {
  title: string
  type: 'radio' | 'checkbox'
  fields: string[]
}

export type ExploreSideBarProps = {
  items: ItemProps[]
}

export function ExploreSidebar({ items }: ExploreSideBarProps) {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading bottomBorder lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox label={field} labelFor={field} key={field} />
            ))}

          {item.type === 'radio' && <RadioGroup items={item.fields} />}
        </div>
      ))}

      <Button fullWidth size="medium">
        Filter
      </Button>
    </S.Wrapper>
  )
}
