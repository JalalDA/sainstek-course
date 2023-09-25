import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Galery = (props: Props) => {
  return (
    <div className='bg-white h-screen'>
        <Head><title>Galery</title></Head>
        <Navbar/>
    </div>
  )
}

export default Galery