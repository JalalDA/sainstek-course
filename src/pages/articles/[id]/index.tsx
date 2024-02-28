import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const SingleArticles = (props: Props) => {
  return (
    <div className='bg-white dark:bg-[#333333]'>
    <Head><title>Tulis Artikel</title></Head>
    <Navbar />
    </div>
  )
}

export default SingleArticles