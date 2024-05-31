import ButtonLoading from '@/components/atoms/ButtonLoading'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import { LessonType } from '@/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { toast } from 'react-toastify'

const UpdateMateri = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const router = useRouter()
    const { id } = router.query
    const [content, setContent] = useState(repo.content)
    const [title, setTitle] = useState(repo.title)
    const [daysto, setDaysTo] = useState(repo.daysto || "")
    const [isLoading, setIsLoading] = useState(false)
    const [isPreview, setIsPreview] = useState(false)

    const updateLesson = async () => {
        setIsLoading(true)
        try {
            const data = await CustomAxios.patch(`/lesson`, {
                lesson_id: id,
                title,
                content,
                daysto
            })
            if (data.status === 200) {
                toast.success("Berhasil mengupdate materi")
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.msg || "Terjadi kesalahan")
        }
        setIsLoading(false)
    }

    const ReactQuill = useMemo(
        () => dynamic(() => import("react-quill"), { ssr: false }),
        [],
    );
    return (
        <Layout title='Update Materi'>
            <form className='border boder-gray-500 p-2 w-full mt-4 rounded-lg' >
                <div className='flex flex-col'>
                    <label className='mb-2' htmlFor="daysto">Hari Ke </label>
                    <input value={daysto} onChange={e => setDaysTo(e.target.value)} className='border border-gray p-1 outline-none rounded-lg' type="number" placeholder='Hari ke ' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2' htmlFor="daysto">Judul Materi </label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='border border-gray p-1 outline-none rounded-lg' type="text" placeholder='Judul Materi ' />
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2' htmlFor="daysto">Konten Materi </label>
                    <ReactQuill
                        className='w-full md:w-2/3 h-[600px] mb-20 mt-4'
                        theme="snow"
                        value={content}
                        onChange={(content: string, delta: any, source: string, editor: any) => {
                            setContent(content)
                        }}
                        modules={{
                            toolbar: [
                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code', 'script'],
                                [{ script: "sub" }, { script: "super" }],
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
                </div>
            </form>
            <div className="flex items-center gap-x-4 mt-8">
                <ButtonLoading isLoading={isLoading} buttonText='Update Materi' onClick={updateLesson} />
                <ButtonLoading isLoading={false} onClick={() => { setIsPreview(!isPreview) }} buttonText='Preview' />
            </div>
        </Layout>
    )
}

export default UpdateMateri

export const getServerSideProps: GetServerSideProps<{
    repo: LessonType
}> = async (context) => {
    const { query } = context
    //@ts-ignore
    const id = query.id
    const data = await CustomAxios.get(`/lesson/${id}`)
    return { props: { repo: data?.data?.data } }
}