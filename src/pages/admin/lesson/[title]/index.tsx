import Button from '@/components/atoms/Button'
import ButtonLoading from '@/components/atoms/ButtonLoading'
import Layout from '@/components/moleculs/admin/Layout'
import Modal from '@/components/moleculs/modals/Modal'
import CustomAxios from '@/config/axios'
import { tabKelas } from '@/static'
import { Lesson } from '@/types'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { RiLoader2Line } from 'react-icons/ri'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify'

const Inline = Quill.import("blots/inline");

const createElementWithClassName = () => {
    class SpanBlock extends Inline {
        static create() {
            let node = super.create();
            node.setAttribute("class", "spanblock");
            node.setAttribute("id", "myId")

            return node;
        }
    }
    SpanBlock.blotName = "spanblock";
    SpanBlock.tagName = "div";
    Quill.register(SpanBlock);

    const div = document.createElement("div");
    var quill = new Quill(div);

    // quill.setContents("");

    const result = quill.root.innerHTML;
    console.log(result);
    return result;
};


type Props = {}

const Lesson = (props: Props) => {
    const router = useRouter()
    const { id } = router.query
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [isCreateLesson, setIsCreateLesson] = useState(false)
    const [daysto, setDaysTo] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [isLoadingLesson, setIsLoadingLesson] = useState(false)
    const [lessons, setLessons] = useState<Lesson[] >([])

    const createLesson = async () => {
        setIsLoading(true)
        try {
            const data = await CustomAxios.post(`/lesson`, {
                course_id: id,
                title,
                content
            })
            if (data.status === 200) {
                toast.success("Berhasil menambahkan materi")
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.msg || "Terjadi kesalahan")
        }
        setIsLoading(false)
    }

    const getLessonByCourseId = async()=>{
        setIsLoadingLesson(true)
        try {
            const {data} = await CustomAxios.post(`/lesson/course`, {course_id : id})
            setLessons(data?.data)
        } catch (error) {
            console.log({error});
            
        }
        setIsLoadingLesson(false)
    }

    useEffect(()=>{
        getLessonByCourseId();
    }, [])

    return (
        <Layout title={"Buat Materi Baru"}>
            <Button onClick={() => setIsCreateLesson(!isCreateLesson)} title='Buat Materi' />
            {
                isCreateLesson &&
                <form className='border boder-gray-500 p-2 w-full mt-4 rounded-lg' >
                    <div className='flex flex-col'>
                        <label className='mb-2' htmlFor="daysto">Hari Ke </label>
                        <input value={daysto} onChange={e => setDaysTo(e.target.value)} className='border border-gray p-1 outline-none rounded-lg' type="number" placeholder='Hari ke ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2' htmlFor="daysto">Judul Materi </label>
                        <input onChange={e => setTitle(e.target.value)} className='border border-gray p-1 outline-none rounded-lg' type="text" placeholder='Judul Materi ' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='mb-2' htmlFor="daysto">Konten Materi </label>
                        <ReactQuill
                            className='w-full md:w-2/3 h-[620px] mb-20 mt-4'
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
                        {/* <ReactQuill
                            ref={reactQuillRef}
                            modules={{
                                toolbar: [
                                    [{ font: [] }, { size: ["small", false, "large", "huge"] }], // custom dropdown

                                    ["bold", "italic", "underline", "strike"],

                                    [{ color: [] }, { background: [] }],

                                    [{ script: "sub" }, { script: "super" }],

                                    [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],

                                    [
                                        { list: "ordered" },
                                        { list: "bullet" },
                                        { indent: "-1" },
                                        { indent: "+1" },
                                    ],

                                    [{ direction: "rtl" }, { align: [] }],

                                    ["link", "image", "video", "formula"],

                                    ["clean"],
                                ],
                            }}
                            value={content}
                            onChange={(content) => {
                                setContent(content);
                            }}
                        /> */}
                    </div>
                    <div className="flex items-center gap-x-4">
                        <ButtonLoading isLoading={isLoading} buttonText='Tambah Materi' onClick={createLesson} />
                        <ButtonLoading isLoading={false} onClick={() => { setIsPreview(!isPreview) }} buttonText='Preview' />
                    </div>
                </form>
            }
            <div className="text-sm">
                {
                    isPreview &&
                    <div className='ql-editor' dangerouslySetInnerHTML={{ __html: content }}></div>
                }
            </div>
            {
                isLoadingLesson ? 
                <RiLoader2Line className={"h-32 w-23 text-blue-500"}/> :
                lessons.map((item, index)=>(
                    <div key={index} className="text-md bg-gray-200 p-4 mt-4 rounded-lg flex flex-col gap-1 ">
                        <div className="">{`Hari ke ${item?.daysto}`}</div>
                        <div className="text-md">{item?.title || ""}</div>
                        <Button title='Update Materi'/>
                    </div>
                ))
            }
        </Layout>
    )
}

export default Lesson