
import Button from '@/components/atoms/Button'
import CardKelas from '@/components/atoms/CardKelas'
import ModalForm from '@/components/atoms/ModalForm'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import { tabKelas } from '@/static'
import { ArticlesType } from '@/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegComment, FaShare } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const Artikel = () => {
  const [isActive, setIsActive] = useState("Semua")
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const [articles, setArticles] = useState<ArticlesType[]>([])
  const getArticles = async () => {
    try {
      const { data } = await CustomAxios.get("/articles")
      setArticles(data?.articles)
    } catch (error) {
      console.log({ error });
      toast.error("Terjadi kesalahan, coba lagi nanti . . .")
    }
  }
  useEffect(() => {
    getArticles();
  }, [])
  return (
    <Layout title='Kelas'>
      <Button onClick={() => router.push("/admin/artikel/add?i=4")} title='Tambah Artikel' />
      <div className="flex items-center gap-x-4 py-2 px-4 rounded-lg shadow-xl mt-4">
        {
          tabKelas.map((item, index) => (
            <div onClick={() => setIsActive(item.name)} key={index} className={`${isActive === item.name ? 'font-bold text-blue-500' : ''}  cursor-pointer hover:text-blue-500 hover:font-bold text-md`}>{item.name}</div>
          ))
        }
      </div>
      <ModalForm isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="grid-cols-2 md:grid-cols-4 grid p-2 items-center justify-center gap-x-8">
        {
          articles.map((item, index) => (
            <div key={index} className="border-gray border p-4 w-72 rounded-lg ">
              <div onClick={() => router.push(`/articles/${item.articles_id}`)} className="text-xl font-bold mb-2 cursor-pointer">{item.title}</div>
              <div dangerouslySetInnerHTML={{ __html: item.content || "" }} className="text-md h-[210px] w-full overflow-hidden"></div>
              <div className="mt-4">
                <div className="flex items-center justify-end gap-x-4 pt-2 border-t-2 border-gray-200">
                  <FaHeart className={"h-4 w-4 cursor-pointer"} />
                  <FaShare className={"h-4 w-4 cursor-pointer"} />
                  <FaRegComment className={"h-4 w-4 cursor-pointer"} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Artikel

// export const getServerSideProps: GetServerSideProps<{
//   repo: any[]
// }> = async () => {
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas`)
//   return { props: { repo : data.data } }
// }