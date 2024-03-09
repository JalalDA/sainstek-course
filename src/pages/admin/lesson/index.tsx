import CardKelas from '@/components/atoms/CardKelas'
import Layout from '@/components/moleculs/admin/Layout'
import CustomAxios from '@/config/axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Lesson = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()
    return (
        <Layout title='Materi Kelas'>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    repo.map((item, index) => (
                        <CardKelas onClick={() => router.push({
                            pathname: `lesson/${item.name.split(" ").join("-").toLocaleLowerCase()}`,
                            query: {
                                id: item.course_id
                            }
                        })} items={item} key={index} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Lesson

export const getServerSideProps: GetServerSideProps<{
    repo: any[]
}> = async () => {
    const { data } = await CustomAxios.get(`/course`)
    return { props: { repo: data.courses } }
}