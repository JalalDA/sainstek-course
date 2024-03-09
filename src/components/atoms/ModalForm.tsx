import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaRegImage } from 'react-icons/fa6';
import Button from './Button';
import ButtonLoading from './ButtonLoading';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Image from 'next/image';

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title : "",
        description : "",
        instructor : "",
        startDate : "",
        endDate : "",
        schedule : "",
        price : 0,
        maxStudents : 0,
        durationInMinutes : 0,
        videoURL : "",
        tags : "",
        category : ""
    });
    const [file, setFile] = useState<File | null>(null)

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLoadingKelas, setIsLoadingKelas] = useState(false)
    const [thumbnailURL, setThumbnailURL] = useState("")

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file)
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleUploadImage = async () => {
        setIsLoading(true)
        const formImage = new FormData()
        //@ts-ignore
        formImage.append("image", file)
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas/imageKelas`, formImage, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setThumbnailURL(data.thumbnailUrl)
            toast.success("Berhasil upload gambar")
        } catch (error) {
            console.log({ error });
            toast.error("Something went wrong, try again later")
        }
        setIsLoading(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setIsLoadingKelas(true)
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas`, {
                thumbnailURL : `/uploads/${thumbnailURL}`,
                ...formData
            })
            toast.success("Kelas berhasil ditambahkan")
            onClose()
        } catch (error) {
            console.log({error});
        }
        setIsLoadingKelas(false)
    };


    return (
        <Transition show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-[full] max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Tambah Kelas
                            </Dialog.Title>

                            <div className="images p-16 flex items-center justify-center">
                                <input onChange={handleImageChange} name='image' id='image-upload' accept='image/*' type="file" style={{ display: 'none' }} />
                                <label htmlFor="image-upload">
                                    {
                                        selectedImage ? <Image src={selectedImage} alt="image" />
                                            :
                                            <FaRegImage className="text-blue-500 h-20 w-20 cursor-pointer" />
                                    }
                                </label>
                            </div>
                            <div className="text-md">Mohon upload gambar dulu</div>
                            <ToastContainer autoClose={1000} />
                            {
                                selectedImage && <ButtonLoading buttonText='Tambah Gambar' onClick={handleUploadImage} isLoading={isLoading} />
                            }
                            <form >
                                <div className="mt-4">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Nama Kelas
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
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
                                    <textarea onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500" name="description" id="description" cols={30} rows={10}></textarea>
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
                                <div className="mt-6">
                                    {
                                        thumbnailURL && <ButtonLoading onClick={handleSubmit} isLoading={isLoadingKelas} buttonText='Tambah Kelas' />
                                    }
                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalForm;
