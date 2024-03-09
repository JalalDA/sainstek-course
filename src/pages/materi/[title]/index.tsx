import LayoutMateri from '@/components/moleculs/meteri/LayoutMateri'
import { RootState } from '@/store/reducers'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Materi = (props: Props) => {

  const role = useSelector((state:RootState)=>state.auth.role)
  const router = useRouter()

  useEffect(()=>{
      if(role !== "Admin"){
          router.replace("/")
      }
  }, [])
  return (
    <LayoutMateri title='Materi'>
        <div>Materi</div>
    </LayoutMateri>
  )
}

export default Materi