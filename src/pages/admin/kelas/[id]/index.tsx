import ButtonLoading from '@/components/atoms/ButtonLoading'
import Layout from '@/components/moleculs/admin/Layout'
import { OnlineClass } from '@/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { FaRegImage } from 'react-icons/fa6'


const Kelas = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const searchParams = useSearchParams()
    const title = searchParams.get("title")
    const [isLoading, setIsLoading] = useState(false)
    const startDate = new Date(repo.startDate)
    const formatedStartDate = startDate.toISOString().split("T")[0]
    const endDate = new Date(repo.endDate)
    const formatedEndDate = endDate.toISOString().split("T")[0]
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        title: repo.title,
        description: repo.description,
        instructor: repo.instructor,
        startDate: formatedStartDate,
        endDate: formatedEndDate,
        schedule: repo.schedule,
        price: repo.price,
        maxStudents: repo.maxStudents,
        durationInMinutes: repo.durationInMinutes,
        videoURL: repo.videoURL,
        tags: repo.tags,
        category: repo.category
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file)
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };
    return (
        <Layout title={`${title}`}>
            <div className="text-2xl">{title}</div>
            <div className="images p-16 flex items-center justify-center">
                <input onChange={handleImageChange} name='image' id='image-upload' accept='image/*' type="file" style={{ display: 'none' }} />
                <label htmlFor="image-upload">
                    {
                        selectedImage ? <img src={selectedImage} alt="image" /> :
                            (
                                repo.thumbnailURL ? <img src={repo.thumbnailURL} alt="image" />
                                    :
                                    <FaRegImage className="text-blue-500 h-20 w-20 cursor-pointer" />)
                    }
                </label>
            </div>
            <form >
                <div className="mt-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Nama Kelas
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={repo.title}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
                        Instruktur Kelas
                    </label>
                    <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Deskripsi Kelas
                    </label>
                    <textarea value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500" name="description" id="description" cols={30} rows={10}></textarea>
                </div>
                <div className="mt-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                        Mulai Kelas
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                        Berakhir Kelas
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        placeholder='halo'
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
                        Jadwal Kelas
                    </label>
                    <input
                        placeholder='contoh : Senin 09:00 AM'
                        type="text"
                        id="schedule"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Harga Kelas
                    </label>
                    <input
                        placeholder='contoh : Senin 09:00 AM'
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="maxStudents" className="block text-sm font-medium text-gray-700">
                        Peserta Maksimal
                    </label>
                    <input
                        placeholder='contoh : 20'
                        type="number"
                        id="maxStudents"
                        name="maxStudents"
                        value={formData.maxStudents}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="durationInMinutes" className="block text-sm font-medium text-gray-700">
                        Durasi Kelas (dalam menit)
                    </label>
                    <input
                        placeholder='contoh : 120'
                        type="number"
                        id="durationInMinutes"
                        name="durationInMinutes"
                        value={formData.durationInMinutes}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Tags
                    </label>
                    <input
                        placeholder='contoh : #programming'
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Kategori
                    </label>
                    <input
                        placeholder='contoh : #programming'
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                {/* <div className="mt-6">
                    {
                        thumbnailURL && <ButtonLoading onClick={handleSubmit} isLoading={isLoadingKelas} buttonText='Tambah Kelas' />
                    }
                </div> */}
                <div className="mt-6">
                    <ButtonLoading onClick={() => { }} buttonText='Update' isLoading={isLoading} />
                </div>
            </form>
        </Layout>
    )
}

export default Kelas


export const getServerSideProps: GetServerSideProps<{
    repo: OnlineClass
}> = async (context) => {
    const { params } = context
    //@ts-ignore
    const id = params?.id
    console.log({ idparams: id });
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas?id=${id}`)

    const repo = data.data
    return { props: { repo } }
}