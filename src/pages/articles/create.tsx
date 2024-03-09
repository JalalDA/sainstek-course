import ButtonLoading from '@/components/atoms/ButtonLoading';
import Footer from '@/components/moleculs/Footer';
import Navbar from '@/components/moleculs/Navbar'
import CustomAxios from '@/config/axios';
import { RootState } from '@/store/reducers';
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

type Props = {}

const CreateArticles = (props: Props) => {

    const role = useSelector((state:RootState)=>state.auth.role)
    const router = useRouter()

    useEffect(()=>{
        if(role !== "Admin"){
            router.replace("/")
        }
    }, [])

    const [value, setValue] = useState("")
    const [title, setTitle] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (content: string, delta: any, source: string, editor: any) => {
        // Kode yang akan dijalankan saat isi editor berubah
        setValue(content);
    };
    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        [],
    );

    const postArticles = async ()=>{
        setIsLoading(true)
        try {
            const {data} = await CustomAxios.post("/articles", {
                content : value,
                title
            })
            setValue("")
            setTitle("")
            toast.success("Sukses kirim artikel")
        } catch (error) {
            console.log({error});
            toast.error("Terjadi kesalahan, coba lagi nanti . . .")
        }
        setIsLoading(false)
    }
    return (
        <div className='bg-white dark:bg-white dark:text-black'>
            <Head><title>Tulis Artikel</title></Head>
            <Navbar />
            <div className='m-10'>
                <div className="text-md font-bold">Tulis Artikel</div>
                <div className='flex flex-col gap-y-2 mt-4'>
                    {/* <label htmlFor="title">Username</label> */}
                    <input placeholder='Judul Artikel' onChange={e => setTitle(e.target.value)}  id='title' className='border border-gray-300 dark:bg-white dark:outline-none rounded-md p-2 w-full md:w-2/3' type="text" value={title} />
                </div>
                <ReactQuill
                    className='w-full md:w-2/3 h-[620px] mb-20 mt-4'
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
                <ButtonLoading buttonText='Kirim' isLoading={isLoading} onClick={postArticles} />
            </div>
            <Footer />
        </div>
    )
}

export default CreateArticles