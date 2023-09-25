import Button from '@/components/atoms/Button'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='bg-white dark:bg-[#333333]'>
        <Head><title>Tentang Kami</title></Head>
        <Navbar/>
        <div className="p-16">
          <div className="text-xl font-bold">Tentang Kami</div>
          <div className="tex-md font-light mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus saepe dolorum tenetur recusandae, corrupti beatae perferendis necessitatibus quasi suscipit reiciendis dolor? Quo libero, natus enim iure quod placeat voluptates.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, cupiditate voluptate. Deleniti assumenda, similique, illo quo aperiam veritatis molestias earum tenetur non iusto nihil provident odit eos eius? Laborum, doloremque? <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae exercitationem magni aperiam neque necessitatibus totam, placeat, officiis porro corrupti unde nemo suscipit a optio deleniti iure. Voluptas, laboriosam repellat?<br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum ipsum impedit voluptates eum qui repudiandae quis officiis deserunt ullam error laudantium dicta nobis non commodi consequuntur, sequi nostrum quasi. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi aut officiis hic quibusdam! Dolore sed aut quia laudantium unde eius maiores quis rerum facilis, nihil perspiciatis minus repellendus ipsum <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, nulla quaerat quidem laboriosam vitae nesciunt! Ipsam quae, obcaecati assumenda dolores expedita, voluptas deleniti iusto recusandae in temporibus dolore! Non, blanditiis.
          </div>
          <div className="text-xl font-bold mt-16">Kritik Dan Saran</div>
          <div className="text-md mt-4">Kritik dan saran kamu bakal berguna banget buat kemajuan kami lo </div>
          <form className='w-1/2'>
            <div className="mt-4  bg-gray-200 dark:bg-gray-500 rounded-lg p-2">
              <input className='outline-none bg-gray-200 dark:bg-gray-500' type="text" placeholder='Nama kamu . . .'/>
            </div>
            <div className="mt-4 dark:bg-gray-500 bg-gray-200 rounded-lg p-2">
              <input className='outline-none dark:bg-gray-500' type="text" placeholder='Alamat kamu . . .'/>
            </div>
            <textarea className='bg-gray-200 dark:bg-gray-500 p-2 mt-4 w-full rounded-lg mb-4 outline-none' placeholder='Tulis saran kamu disini' cols={10} rows={20}></textarea>
            <Button title='Kirim'/>
          </form>
        </div>
        <Footer/>
    </div>
  )
}

export default About