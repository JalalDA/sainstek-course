import Layout from '@/components/moleculs/admin/Layout'
import Category from '@/components/moleculs/category/Category'
import React from 'react'

type Props = {}

const TambahArtikel = (props: Props) => {
    return (
        <Layout title='Tambah Artikel'>
            <div className="text-xl">Tambah Artikel</div>
            <div className="p-4">
                <input type="text" placeholder='Judul Artikel' className='dark:bg-gray-500 rounded-md outline-none p-2 w-1/2' />
                <Category />
                <textarea
                    className="w-full h-96 p-2 border rounded-md dark:bg-gray-500"
                    placeholder="Mulai menulis artikel Anda di sini..."
                // value={articleContent}
                // onChange={handleContentChange}
                />
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                // onClick={handleSave}
                >
                    Simpan Artikel
                </button>
            </div>
        </Layout>
    )
}

export default TambahArtikel