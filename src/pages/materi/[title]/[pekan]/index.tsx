import LayoutMateri from '@/components/moleculs/meteri/LayoutMateri'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const SingleMateri = (props: Props) => {
  const router = useRouter()
  const params = useParams()
  console.log({params});
  
  return (
    <LayoutMateri title='Pekan Ke 1'>
      <div>SingleMateri</div>
    </LayoutMateri>
  )
}

export default SingleMateri