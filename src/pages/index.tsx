import { Poppins } from 'next/font/google'
import HeroSection from '@/components/moleculs/HeroSection'
import Fasilitas from '@/components/moleculs/Fasilitas'
import Head from 'next/head'
import Features from '@/components/moleculs/Features'
import Cta from '@/components/moleculs/Cta'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'

const popins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-white dark:bg-white dark:text-black flex-col items-center  p-0 ${popins.className}`}
    >
      <Head><title>Beranda</title></Head>
      <Navbar/>
      <HeroSection/>
      <Fasilitas/>
      <Features/>
      <Cta/>
      <Footer/>
    </main>
  )
}
