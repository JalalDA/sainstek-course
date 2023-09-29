import Navbar from '@/components/moleculs/NavbarSec'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Galery = (props: Props) => {
  return (
    <div className='bg-white h-screen dark:bg-[#333333]'>
        <Head><title>Galery</title></Head>
        <Navbar/>
    </div>
  )
}

export default Galery