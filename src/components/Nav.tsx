'use client'

import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { TbBrightnessDown, TbMoon } from 'react-icons/tb'

export const Nav: React.FC = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)
	React.useEffect(() => setMounted(true), [])

	return (
    <>
      <Navbar shouldHideOnScroll> 
        <NavbarBrand>
          <p className="font-bold text-inherit text-4xl ml-2">
            Receipt Manager
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          {mounted && (
            <Button
              isIconOnly
              onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <TbMoon /> : <TbBrightnessDown />}
            </Button>
          )}
        </NavbarContent>
      </Navbar>
    </>
	)
}