import ButtonLoading from '@/components/atoms/ButtonLoading'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill, RiLoader2Fill } from 'react-icons/ri'
import { toast } from 'react-toastify'

type Props = {}

type SingleArticles = {
  content: string
  createdAt: string
  likes: null | number
  photo: string
  shared: null | number
  title: string
  username: string
}

type CommentArticle = {
  content: string,
  createdAt: string,
  photo: string,
  username: string,
  comment_id: string
}

const SingleArticles = (props: Props) => {
  const router = useRouter()
  const { title, id } = router.query
  const [isLoading, setIsLoading] = useState(false)
  const [comment, setComment] = useState("")
  const [commentArticles, setCommentArticles] = useState<CommentArticle[]>([])
  const [isLoadingComment, setIsLoadingComment] = useState(false)
  const [isLoadDeleteComment, setIsLoadDeleteComment] = useState(false)
  const [aritcle, setArticle] = useState<SingleArticles>({
    content: "",
    createdAt: "",
    likes: null,
    photo: "",
    shared: null,
    title: "",
    username: ""
  })

  const getSingleArticle = async () => {
    setIsLoading(true)
    try {
      const data = await CustomAxios.get(`/articles/${id}`)
      if (data.status === 200) {
        setArticle(data?.data?.articles[0])
      }
    } catch (error) {
      console.log({ error });
      toast.error(`Terjadi kesalahan saat mendapatkan articles`)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (id) {
      getSingleArticle()
    }
  }, [])

  //tambah comment
  const createComment = async () => {
    setIsLoadingComment(true)
    try {
      const body = {
        content: comment,
        articles_id: id
      }
      const data = await CustomAxios.post(`/comment`, body)
      if (data.status === 200) {
        setComment("")
        toast.success("Berhasil menambahkan komentar")
        getComment();
      }
    } catch (error) {
      console.log({ error });
      toast.error("Terjadi kesalahan, silakan coba lagi nanti")
    }
    setIsLoadingComment(false)
  }

  //get comment
  const getComment = async () => {
    try {
      const data = await CustomAxios.get(`/comment/${id}`)
      setCommentArticles(data?.data?.data || [])
    } catch (error) {
      console.log({ error });
      toast.error("Terjadi kesalahan, coba lagi nanti")
    }
  }
  useEffect(() => {
    getComment()
  }, [])

  //deleteComment
  const deleteComment = async (id: string) => {
    setIsLoadDeleteComment(true)
    try {
      const data = await CustomAxios.patch(`/comment/${id}`)
      console.log({ data });
    } catch (error) {
      console.log({ error });
      toast.error("Terjadi kesalahan, coba lagi nanti")
    }
    setIsLoadDeleteComment(false)
  }
  return (
    <div className='bg-white dark:bg-white dark:text-black'>
      <Head><title>{title || ""}</title></Head>
      <Navbar />
      <div className="z-0 p-2">
        {
          isLoading ?
            <RiLoader2Fill className="h-32 w-32 text-blue-500" /> :
            <div className="text-md mt-4 md:p-12">
              <div className="title font-bold text-lg">{aritcle.title}</div>
              <div className="author font-italic text-xs mt-2">{`By : ${aritcle.username}`}</div>
              <div className="author font-italic text-xs mb-4">{moment(aritcle.createdAt).format("DD/MM/YYYY")}</div>
              <div dangerouslySetInnerHTML={{ __html: aritcle.content }} className="text-md md:w-2/3"></div>
            </div>
        }
      </div>
      <div className="mb-4 md:p-12 p-2">
        <div className="text-md border-b-2 border-gray-400 pb-2 font-bold">Comment</div>
        <div className="flex items-center justify-end mt-4 gap-x-2">
          <input value={comment} onChange={e => setComment(e.target.value)} className='w-full rounded-lg border border-gray p-2' type="text" placeholder='Tulis komentar kamu disini . . .' />
          <ButtonLoading buttonText='Kirim' isLoading={isLoadingComment} onClick={createComment} />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          {
            commentArticles.map((item, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <div className="h-16 w-16 rounded-full border border-gray-200 ">
                  <Image className='h-16 w-16 rounded-full' height={200} width={200} src={item.photo} alt='photo' />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold">{item.username}</div>
                  <div className="username text-md">{item.content}</div>
                </div>
                <div onClick={() => {
                  deleteComment(item?.comment_id)
                }} className="text-red ml-4 cursor-pointer">
                  {
                    isLoadDeleteComment ?
                      <RiLoader2Fill className="text-red-400" /> :
                      <RiDeleteBin6Fill className="text-red-400" />
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
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