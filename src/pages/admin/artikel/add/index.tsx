import Button from '@/components/atoms/Button'
import Layout from '@/components/moleculs/admin/Layout'
import Category from '@/components/moleculs/category/Category'
import CustomAxios from '@/config/axios'
import { getCategory } from '@/utils/request'
import dynamic from 'next/dynamic'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

type Props = {}

const TambahArtikel = (props: Props) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [selectedCategories, setSelectedCategories] = useState("")
    const [value, setValue] = useState("")
    const handleChange = (content: string, delta: any, source: string, editor: any) => {
        // Kode yang akan dijalankan saat isi editor berubah
        setValue(content);
    };

    const getCategories = async()=>{
        const data = await getCategory()
        setCategories(data)
    }
    useEffect(()=>{
        getCategories();
    }, [])

    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        [],
    );

    const postArticles = async ()=>{
        if(!title){
            return toast.error("Jangan biarkan title kosong")
        }
        setIsLoading(true)
        try {
            const {data} = await CustomAxios.post("/articles", {
                content : value,
                title, 
                category : selectedCategories
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
        <Layout title='Tambah Artikel'>
            <div className="text-xl">Tambah Artikel</div>
            <div className="p-4">
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="text" placeholder='Judul Artikel' className='border border-gray-200 rounded-md outline-none p-2 w-2/3' />
                <Category setSelectedCategories={setSelectedCategories} data={categories} />
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
                <Button onClick={postArticles} isLoading={isLoading} title='Tambah Artikel'/>
            </div>
        </Layout>
    )
}

export default TambahArtikel