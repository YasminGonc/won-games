import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

import { List, MagnifyingGlass, X } from 'phosphor-react'
import { Logo } from '../Logo'
import Button from '../Button'
import { MediaMatch } from '../MediaMatch'
import { CartDropdown } from '../CartDropdown'
import { CartIcon } from '../CartIcon'
import { UserDropdown } from '../UserDropdown'

export type MenuProps = {
  username?: string
}

export function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <List size={24} aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <MagnifyingGlass size={24} aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown aria-label="Open shopping cart" />
          </MediaMatch>

          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/signIn" passHref legacyBehavior>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <X size={24} aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref legacyBehavior>
                <S.MenuLink>My account</S.MenuLink>
              </Link>
              <Link href="/profile/wishilist" passHref legacyBehavior>
                <S.MenuLink>Wishilist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/signIn" passHref legacyBehavior>
              <Button as="a" fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
