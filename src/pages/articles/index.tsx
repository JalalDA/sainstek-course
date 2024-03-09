import Fasilitas from '@/components/moleculs/Fasilitas'
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios'
import { ArticlesType } from '@/types'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FaHeart } from "react-icons/fa";
import { FaRegComment, FaShare } from 'react-icons/fa6'
import { useRouter } from 'next/router'
import Footer from '@/components/moleculs/Footer'

type Props = {}

const Articles = (props: Props) => {
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

    const router = useRouter()
    return (
        <div className='bg-white dark:bg-white dark:text-black'>
            <Head><title>Artikel</title></Head>
            <Navbar />
            <div className="p-4 md:py-16 md:px-20">
                <div className="text-md md:text-2xl font-bold mb-16 text-center">Nikmati berbagai macam kelas <br /> pilihan yang sesuai dengan minat dan bakatmu bersama trainer yang supportive dan menyenangkan</div>
                <Fasilitas />
                <div className="grid-cols-2 md:grid-cols-4 grid p-4 items-center justify-center gap-x-8">
                    {
                        articles.map((item, index) => (
                            <div key={index} className="border-gray border p-4 w-72 rounded-lg ">
                                <div onClick={()=>router.push({
                                    pathname : item.title && `articles/${item?.title.split(" ").join("-").toLocaleLowerCase()}`,
                                    query : {
                                        id : item?.articles_id
                                    }
                                })} className="text-xl font-bold mb-2 cursor-pointer">{item.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: item.content || "" }} className="text-md h-[210px] w-full overflow-hidden"></div>
                                <div className="mt-4">
                                    <div className="flex items-center justify-end gap-x-4 pt-2 border-t-2 border-gray-200">
                                        <FaHeart className={"h-4 w-4 cursor-pointer"} />
                                        <FaShare className={"h-4 w-4 cursor-pointer"}/>
                                        <FaRegComment className={"h-4 w-4 cursor-pointer"} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div >
    )
}

export default Articles