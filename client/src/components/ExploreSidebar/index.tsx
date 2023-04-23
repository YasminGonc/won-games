import { useState } from 'react'
import * as S from './styles'
import { FunnelSimple, X } from 'phosphor-react'

import Button from '../Button'
import { Checkbox } from '../Checkbox'
import { Heading } from '../Heading'
import { RadioGroup } from '../RadioGroup'

export type ItemProps = {
  title: string
  name?: string
  type: 'radio' | 'checkbox'
  fields: string[]
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSideBarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

export function ExploreSidebar({
  items,
  initialValues = {},
  onFilter
}: ExploreSideBarProps) {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  function handleCheckChange(field: string, value: boolean | string) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  function handleFilter() {
    setIsOpen(false)
    onFilter(values)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FunnelSimple
          size={24}
          aria-label="Open filters"
          onClick={() => setIsOpen(true)}
        />
        <X
          size={24}
          aria-label="Close filters"
          onClick={() => setIsOpen(false)}
        />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading bottomBorder lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  label={field}
                  labelFor={field}
                  key={field}
                  isChecked={!!values[field.toLocaleLowerCase()]}
                  onCheck={(value) =>
                    handleCheckChange(field.toLocaleLowerCase(), value)
                  }
                />
              ))}

            {item.type === 'radio' && (
              <RadioGroup
                name={item.name}
                items={item.fields}
                defaultValue={
                  values[item.name!] ? values[item.name!].toString() : undefined
                }
                onChange={(value) => handleCheckChange(item.name!, value)}
              />
            )}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
