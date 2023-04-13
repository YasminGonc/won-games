import Link from 'next/link'
import * as S from './styles'
import { CreditCard, ListBullets, SignOut, UserCircle } from 'phosphor-react'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

export function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <UserCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
          <CreditCard size={24} />
          <span>My cards</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <ListBullets size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref legacyBehavior>
        <S.Link title="Sign out">
          <SignOut size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}
