import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import { ConnectButton } from '@rainbow-me/rainbowkit';


export function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/editor">✍ Editor</a></li>
          <li><a href="https://builddocs.musedao.io/docs/intro">📖 Docs</a></li>
          <li><a href="https://builddocs.musedao.io/blog">📢 Blog</a></li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">Muse Build</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/editor">Editor</a></li>
          <li><a href="https://builddocs.musedao.io/docs/intro">Docs</a></li>
          <li><a href="https://builddocs.musedao.io/blog">Blog</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  )
}
