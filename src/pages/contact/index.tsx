import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='bg-white h-screen'>
        <Head><title>Hubungi Kami</title></Head>
        <Navbar/>
    </div>
  )
}

export default Contact