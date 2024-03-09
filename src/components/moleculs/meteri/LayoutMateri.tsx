import Head from 'next/head'
import React from 'react'
import SidebarMateri from './SidebarMateri'

type Props = {
    children : React.ReactNode,
    title : string
}

const LayoutMateri = ({children, title}: Props) => {
  return (
    <div className='h-screen overflow-scroll flex items-center justify-center'>
        <Head>
            <title>{title}</title>
        </Head>
        <SidebarMateri/>
        <div className="w-3/4 bg-blue-500 items-start flex flex-col justify-start p-4 h-full overflow-scroll">
            {children}
        </div>
    </div>
  )
}

export default LayoutMateri