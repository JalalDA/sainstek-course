import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'

type Props = {}

const UserKelas = ({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>UserKelas</div>
  )
}

export default UserKelas

export const getServerSideProps: GetServerSideProps<{
    repo: any[]
  }> = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/kelas`)
    return { props: { repo : data.data } }
  }