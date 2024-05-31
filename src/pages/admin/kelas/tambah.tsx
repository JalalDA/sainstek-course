import ButtonLoading from '@/components/atoms/ButtonLoading'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoImageSharp } from 'react-icons/io5'
import { ToastContainer, toast } from 'react-toastify'

type Props = {}

const TambahKelas = (props: Props) => {
    const [name, setName] = useState("")
    const [price_top, setPriceTop] = useState(0)
    const [price_down, setPriceDown] = useState(0)
    const [rating, setRating] = useState(5)
    const [total_member, setTotalMember] = useState(0)
    const [duration, setDuration] = useState(4)
    const [level, setLevel] = useState("")
    const [category, setCategory] = useState("")
    const [trainer, setTrainer] = useState("")
    const [about, setAbout] = useState("")
    const [for_who, setForWho] = useState("")
    const [requirement, setRequirement] = useState("")
    const [will_learn, setWillLearn] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    const [file, setFile] = useState<File | null>(null)
    const [selectedImg, setSelectedImg] = useState("")

    const formData = new FormData()

    //@ts-ignore
    formData.append("photo", file)
    formData.append("name", name)
    //@ts-ignore
    formData.append("price_top", price_top)
    //@ts-ignore
    formData.append("price_down", price_down)
    //@ts-ignore
    formData.append("duration", duration)
    formData.append("about", about)
    formData.append("for_who", for_who)
    formData.append("requirement", requirement)
    formData.append("will_learn", will_learn)

    const createCourse = async () => {
        setIsLoading(true)
        try {
            const data = await CustomAxios.post('/course',
                formData
            )
            if (data.status === 200) {
                toast.success("Berhasil menambahkan kelas")
                router.push("/admin/kelas")
            }
        } catch (error: any) {
            console.log({ error });
            toast.error(error?.response?.data?.msg || "Terjadi kesalahan, silakan coba lagi")
        }
        setIsLoading(false)
    }


    return (
        <Layout title='Tambah Kelas'>
            <div>Tambah Kelas</div>
            <form className='border border-gray-200 p-2 mt-4 rounded-lg w-2/3'>
                <div className='flex flex-col gap-x-2 mt-2 mb-4'>
                    <label htmlFor="photo">
                        {
                            selectedImg ?
                                <Image alt='' src={selectedImg} height={200} width={200} className='h-64 w-96' /> :
                                <IoImageSharp className={"h-64 w-96 cursor-pointer"} />
                        }
                    </label>
                    <input type='file'
                        onChange={e => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFile(file)
                                const imageUrl = URL.createObjectURL(file);
                                setSelectedImg(imageUrl);
                            }
                        }} className='p-2 rounded-lg border-gray border outline-none h-40 hidden ' id='photo' placeholder='' />
                </div>
                <div className='flex flex-col gap-x-2'>
                    <label htmlFor="name">Nama Kelas</label>
                    <input onChange={e => {
                        setName(e.target.value)
                    }} value={name} className='p-2 rounded-lg border-gray border outline-none' id='name' type="text" placeholder='Nama kelas . . .' />
                </div>
                <div className='flex flex-col gap-x-2 mt-2'>
                    <label htmlFor="name">Deskripsi Kelas</label>
                    <textarea value={about} onChange={e => setAbout(e.target.value)} className='p-2 rounded-lg border-gray border outline-none h-40' id='name' placeholder='Deskripsi . . .' />
                </div>
                <div className='flex flex-col gap-x-2 mt-2'>
                    <label htmlFor="name">Harga Asli</label>
                    <input value={price_top} onChange={e => setPriceTop(Number(e.target.value))} className='p-2 rounded-lg border-gray border outline-none' id='name' type="number" placeholder='Harga Asli . . .' />
                </div>
                <div className='flex flex-col gap-x-2'>
                    <label htmlFor="name">Harga Promo</label>
                    <input value={price_down} onChange={e => setPriceDown(Number(e.target.value))} className='p-2 rounded-lg border-gray border outline-none' id='name' type="text" placeholder='Harga Promo . . .' />
                </div>
                <div className='flex flex-col gap-x-2'>
                    <label htmlFor="name">Durasi Kelas</label>
                    <input value={duration} onChange={e => setDuration(Number(e.target.value))} className='p-2 rounded-lg border-gray border outline-none' id='name' type="text" placeholder='Durasi kelas (Pekan)' />
                </div>
                <div className='flex flex-col gap-x-2 mt-2'>
                    <label htmlFor="name">Untuk Siapa Kelas Ini</label>
                    <textarea value={for_who} onChange={e => setForWho(e.target.value)} className='p-2 rounded-lg border-gray border outline-none h-40' id='name' placeholder='Untuk siapa kelas ini . . .' />
                </div>
                <div className='flex flex-col gap-x-2 mt-2 mb-4'>
                    <label htmlFor="name">Persyaratan Kelas</label>
                    <textarea value={requirement} onChange={e => setRequirement(e.target.value)} className='p-2 rounded-lg border-gray border outline-none h-40' id='name' placeholder='Persyaratan Kelas . . .' />
                </div>
                <div className='flex flex-col gap-x-2 mt-2 mb-4'>
                    <label htmlFor="name">Apa saja yang akan dipelajari di kelas ini?</label>
                    <textarea value={will_learn} onChange={e => setWillLearn(e.target.value)} className='p-2 rounded-lg border-gray border outline-none h-40' id='name' placeholder='Apa saja yang akan dipelajari? . . .' />
                </div>
                <ButtonLoading buttonText='Tambah Kelas' isLoading={isLoading} onClick={createCourse} />
            </form>
        </Layout>
    )
}

export default TambahKelas