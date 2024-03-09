import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { RiLoader2Fill } from 'react-icons/ri'
import { toast } from 'react-toastify'

type Props = {}

type SingleArticles = {
  content : string
  createdAt : string 
  likes : null | number
  photo : string
  shared : null | number
  title : string
  username : string
}

const SingleArticles = (props: Props) => {
  const router = useRouter()
  const {title, id} = router.query
  const [isLoading, setIsLoading] = useState(false)
  const [aritcle, setArticle] = useState<SingleArticles>({
    content : "",
    createdAt : "",
    likes : null,
    photo : "",
    shared : null,
    title : "",
    username : ""
  })

  const getSingleArticle = async()=>{
    setIsLoading(true)
    try {
      const data = await CustomAxios.get(`/articles/${id}`)
      if(data.status === 200){
        setArticle(data?.data?.articles[0])
      }
    } catch (error) {
      console.log({error});
      toast.error(`Terjadi kesalahan saat mendapatkan articles`)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    if(id){
      getSingleArticle()
    }
  }, [])
  return (
    <div className='bg-white dark:bg-[#333333]'>
      <Head><title>{title || ""}</title></Head>
      <Navbar />
      <div className="z-0">
        {
          isLoading ? 
          <RiLoader2Fill className="h-32 w-32 text-blue-500"/> :
          <div className="text-md mt-4 md:p-12">
            <div className="title font-bold text-lg">{aritcle.title}</div>
            <div className="author font-italic text-xs mt-2">{`By : ${aritcle.username}`}</div>
            <div className="author font-italic text-xs mb-4">{moment(aritcle.createdAt).format("DD/MM/YYYY")}</div>
            <div dangerouslySetInnerHTML={{__html : aritcle.content}} className="text-md md:w-2/3"></div>
          </div>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default SingleArticles

export const getServerSideProps: GetServerSideProps<{
  
}> = async (context) => {
  const { params } = context
  //@ts-ignore
  const id = params?.id
  return { props: {} }
}