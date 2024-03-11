import Button from '@/components/atoms/Button'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { toast } from 'react-toastify'

type Props = {}

type CategoryType = {
    category_id : string,
    name : string
}

const Category = (props: Props) => {
    const [categoryName, setCategoryName] = useState("")
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const addCategory =async () => {
        setIsLoading(true)
        try {
            const data = await CustomAxios.post(`/category`, {
                name : categoryName
            })
            if(data.status == 200){
                toast.success("Berhasil menambahkan category")
                setCategoryName("")
                getCategory()
            }
        } catch (error) {
            console.log({error});
            toast.error("Terjadi kesalahan, coba lagi nanti")
        }
        setIsLoading(false)
    }
    const getCategory =async () => {
        try {
            const data = await CustomAxios.get(`/category`)
            console.log({data});
            setCategories(data?.data?.data)
        } catch (error) {
            console.log({error});
            toast.error("Terjadi kesalahan saat mengambil data")
        }
    }
    useEffect(()=>{
        getCategory();
    }, [])

    const deleteCategory = async(id:string)=>{
        try {
            const data = await CustomAxios.patch(`/category`, {
                category_id : id
            })
            if(data.status === 200){
                toast.success(`Berhasil menghapus data`)
                getCategory()
            }
        } catch (error) {
            console.log({error});
            toast.error("Terjadi kesalahan saat menghapus data")
        }
    }
  return (
    <Layout title='Kategori'>
        <form className='md:w-1/2'>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="">Nama Kategori</label>
                <input value={categoryName} onChange={(e=>setCategoryName(e.target.value))} className='p-2 border border-gray-200 rounded-lg dark:bg-white' type="text" placeholder='Masukan nama kategori' />
                <Button isLoading={isLoading} onClick={addCategory} title='Tambah kategori'/>
            </div>
        </form>
        <div className="mt-4 flex flex-col gap-y-2">
            {
                categories.map((item, index)=>(
                    <div key={index} className="border border-gray-200 p-4 rounded-lg flex items-center justify-between gap-x-2">
                        <div className="font-bold">{item.name}</div>
                        <RiDeleteBin6Fill onClick={()=>{
                            deleteCategory(item.category_id)
                        }} className="text-red-500 cursor-pointer"/>
                    </div>
                ))
            }
        </div>
    </Layout>
  )
}

export default Category