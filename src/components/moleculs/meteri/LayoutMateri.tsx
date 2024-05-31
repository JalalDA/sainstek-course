import Head from 'next/head'
import React from 'react'
import SidebarMateri from './SidebarMateri'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import Sidenav from './Sidenav'

type Props = {
  children: React.ReactNode,
  title: string
}

const LayoutMateri = ({ children, title }: Props) => {
  return (
    <div className='
    bg-white text-black h-screen max-h-screen
    '>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex">
        <Sidenav title={title}/>
        <main className='flex-1'>
          <Header />
          <HeaderMobile />
          {children}
        </main>
      </div>
    </div>
  )
}

export default LayoutMateri