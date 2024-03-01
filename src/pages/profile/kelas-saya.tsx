import CardKelas from '@/components/atoms/CardKelas'
import CardUserCourse from '@/components/atoms/CardUserCourse'
import LayoutProfile from '@/components/moleculs/profile/LayoutProfile'
import CustomAxios from '@/config/axios'
import store from '@/store'
import { UserCourse } from '@/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiLoader2Fill } from 'react-icons/ri'

type Props = {}

const Kelassaya = (props:Props)=> {
  const [userClass, setUserClass] = useState<UserCourse[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getUserClass = async () => {
    setIsLoading(true)
    try {
      const { data } = await CustomAxios.get(`/usercourse`)
      setUserClass(data?.data)
    } catch (error) {
      console.log({ error });

    }
    setIsLoading(false)
  }

  useEffect(() => {
    getUserClass();
  }, [])
  return (
    <LayoutProfile>
      <div className="font-bold mb-4">Kelas Saya</div>
      {
        isLoading ? <RiLoader2Fill /> :
          userClass && userClass?.map((item, index) => (
            <CardUserCourse key={index} item={item}/>
          ))
      }
    </LayoutProfile>
  )
}

export default Kelassaya

// export const getServerSideProps: GetServerSideProps<{
//   repo: any[]
// }> = async () => {
//   const token = store.getState().user.user.user_id
//   console.log({token})
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/v1/course`, {
//     headers : {
//       Authorization : `Bearer ${token}`
//     }
//   })
//   return { props: { repo : data } }
// }