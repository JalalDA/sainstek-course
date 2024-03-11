import Button from '@/components/atoms/Button'
import Layout from '@/components/moleculs/admin/Layout'
import Category from '@/components/moleculs/category/Category'
import CustomAxios from '@/config/axios'
import { SingleArticles } from '@/pages/articles/[title]'
import { getCategory } from '@/utils/request'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {}

const SingleArticle = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState(repo.title)
  const [selectedCategories, setSelectedCategories] = useState("")
  const [value, setValue] = useState(repo.content)
  const handleChange = (content: string, delta: any, source: string, editor: any) => {
    // Kode yang akan dijalankan saat isi editor berubah
    setValue(content);
  };

  const router = useRouter()
  const { id } = router.query

  const getCategories = async () => {
    const data = await getCategory()
    setCategories(data)
  }
  useEffect(() => {
    getCategories();
  }, [])

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    [],
  );

  const udpateArticles = async () => {
    if (!title) {
      return toast.error("Jangan biarkan title kosong")
    }
    setIsLoading(true)
    try {
      const { data } = await CustomAxios.post(`/articles`, {
        content: value,
        title,
        id : id
      })
      toast.success("Sukses update artikel")
    } catch (error) {
      console.log({ error });
      toast.error("Terjadi kesalahan, coba lagi nanti . . .")
    }
    setIsLoading(false)
  }

  return (
    <Layout title='Tambah Artikel'>
      <div className="text-xl p-4">Tambah Artikel</div>
      <div className="p-4">
        <input value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} type="text" placeholder='Judul Artikel' className='border border-gray-200 rounded-md outline-none p-2 w-full md:w-2/3' />
        <Category setSelectedCategories={setSelectedCategories} data={categories} />
        <ReactQuill
          className='w-full md:w-2/3 h-[600px] mb-20 mt-4'
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={{
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'script'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' },
              { 'indent': '-1' }, { 'indent': '+1' }],
              ['link', 'image', 'video'],
              ['clean']
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'script',
            'list', 'bullet', 'indent', 'image', 'video',
            'link',
          ]}
        />
        <div className="mb-8"></div>
      </div>
      <Button onClick={udpateArticles} isLoading={isLoading} title='Update Artikel' />
    </Layout>
  )
}

export default SingleArticle

export const getServerSideProps: GetServerSideProps<{
  repo: SingleArticles
}> = async (context) => {
  const { query } = context
  //@ts-ignore
  const id = query.id
  const data = await CustomAxios.get(`/articles/${id}`)
  return { props: {repo : data?.data?.articles[0]} }
}