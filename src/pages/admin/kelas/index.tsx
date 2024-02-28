
import Button from '@/components/atoms/Button'
import CardKelas from '@/components/atoms/CardKelas'
import ModalForm from '@/components/atoms/ModalForm'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import { tabKelas } from '@/static'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Kelas = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isActive, setIsActive] = useState("Semua")
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  return (
    <Layout title='Kelas'>
      <Button onClick={()=>router.push("kelas/tambah")} title='Tambah Kelas' />
      <div className="flex items-center gap-x-4 py-2 px-4 rounded-lg shadow-xl mt-4">
        {
          tabKelas.map((item, index) => (
            <div onClick={() => setIsActive(item.name)} key={index} className={`${isActive === item.name ? 'font-bold text-blue-500' : ''}  cursor-pointer hover:text-blue-500 hover:font-bold text-md`}>{item.name}</div>
          ))
        }
      </div>
      <ModalForm isOpen={showModal} onClose={()=>setShowModal(false)}/>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {
          repo.map((item, index)=>(
            <CardKelas onClick={()=>router.push(`kelas/${item._id}?title=${item.title}&i=3`)} items={item} key={index}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default Kelas

export const getServerSideProps: GetServerSideProps<{
  repo: any[]
}> = async () => {
  const { data } = await CustomAxios.get(`/course`)
  return { props: { repo : data.courses } }
}