'use client'
import React from 'react'
import { useAppDispatch } from '@/store/reduxHooks'
import { navbarItems } from '../consts/NavbarItems'
import { removeNews } from '@/widgets/NewsItemsList/model/newsSlice'
import Link from 'next/link'
import cl from './Navbar.module.scss'

const Navbar = () => {
  const dispatch = useAppDispatch()

  return (
    <nav>
      <div className={cl.navbarWrapper}>
        <ul className={cl.navbarItems}>
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link onClick={() => dispatch(removeNews())} href={item.address}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
