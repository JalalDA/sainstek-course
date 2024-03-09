import Button from '@/components/atoms/Button'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='bg-white dark:bg-white dark:text-black'>
      <Head><title>Tentang Kami</title></Head>
      <Navbar />
      <div className="p-4 md:p-16">
        <div className="text-xl font-bold">Tentang Kami</div>
        <div className="tex-md font-light mt-4 md:w-2/3">
          Sciencebox adalah lembaga kursus coding yang berkomitmen untuk memberikan pengalaman pembelajaran yang mendalam dan memuaskan bagi setiap siswa. Kami percaya bahwa setiap individu memiliki potensi untuk menjadi ahli dalam pemrograman komputer, dan kami berusaha keras untuk memastikan bahwa setiap siswa merasa didukung dan terbantu selama perjalanan mereka dalam mempelajari coding. <br/>
          <br/>

          Kami memahami bahwa setiap siswa memiliki kecepatan belajar yang berbeda, oleh karena itu, pendekatan kami sangatlah individual. Trainer kami yang berpengalaman dan berpengetahuan luas tidak hanya menjadi pengajar, tetapi juga menjadi mentor yang mendukung siswa dalam setiap tahap pembelajaran. Mereka siap membantu memecahkan setiap tantangan dan menjawab setiap pertanyaan yang mungkin timbul. <br/>
          <br/>

          Harga kursus kami sangat terjangkau, karena kami percaya bahwa akses terhadap pendidikan berkualitas tidak seharusnya menjadi hak istimewa. Kami ingin memastikan bahwa siapa pun, dari berbagai latar belakang, memiliki kesempatan untuk belajar coding tanpa membebani dompet mereka. <br/><br/>

          Salah satu keunggulan kami adalah akses materi selamanya. Kami memahami bahwa pembelajaran coding adalah perjalanan seumur hidup. Oleh karena itu, setelah siswa menyelesaikan kursus kami, mereka tetap memiliki akses tak terbatas ke semua materi kursus yang telah mereka pelajari. Ini memungkinkan mereka untuk terus memperdalam pengetahuan mereka dan memperbarui keterampilan mereka sesuai dengan perkembangan teknologi yang terus berubah. <br/><br/>

          Bergabunglah dengan Sciencebox dan rasakan perbedaannya dalam belajar coding dengan fokus pada kemampuan siswa, dukungan penuh dari trainer, harga terjangkau, dan akses materi selamanya. Segera mulailah perjalanan Anda menuju keahlian dalam dunia pemrograman komputer bersama kami!<br/>






        </div>
        <div className="text-xl font-bold mt-16">Kritik Dan Saran</div>
        <div className="text-md mt-4">Kritik dan saran kamu bakal berguna banget buat kemajuan kami lo </div>
        <form className='md:w-1/2 w-full'>
        <div className="mt-4 dark:white bg-gray-200 rounded-lg p-2">
            <input className='outline-none bg-gray-200 dark:white w-full' type="text" placeholder='Nama kamu . . .' />
          </div>
          <div className="mt-4 dark:white bg-gray-200 rounded-lg p-2">
            <input className='outline-none bg-gray-200 dark:white w-full' type="text" placeholder='Alamat kamu . . .' />
          </div>
          <textarea className='bg-gray-200 dark:white p-2 mt-4 w-full rounded-lg mb-4 outline-none' placeholder='Tulis saran kamu disini' cols={10} rows={20}></textarea>
          <Button title='Kirim' />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default About