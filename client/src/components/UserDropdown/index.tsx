import Link from 'next/link'
import { UserCircle, CaretDown, Heart, SignOut } from 'phosphor-react'
import { Dropdown } from '../Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

export function UserDropdown({ username }: UserDropdownProps) {
  return (
    <Dropdown
      title={
        <S.Title>
          <UserCircle size={24} />
          {username}
          <CaretDown size={24} />
        </S.Title>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref legacyBehavior>
          <S.Link>
            <UserCircle size={24} />
            <span>My profile</span>
          </S.Link>
        </Link>

        <Link href="/wishlist" passHref legacyBehavior>
          <S.Link>
            <Heart size={24} />
            <span>Wishlist</span>
          </S.Link>
        </Link>

        <Link href="/logout" passHref legacyBehavior>
          <S.Link>
            <SignOut size={24} />
            <span>Sign out</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  )
}
