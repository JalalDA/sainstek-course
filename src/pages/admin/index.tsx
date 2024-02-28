import Layout from '@/components/moleculs/admin/Layout'
import { RootState } from '@/store/reducers'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Admin = (props: Props) => {

  const router = useRouter()

  const role = useSelector((state:RootState)=>state.auth.role)

  useEffect(()=>{
    if(role !== "Admin"){
      router.replace("/")
    }
  }, [])
    
  return (
    <Layout title='Dashboard'>
      <div>Admin page</div>
    </Layout>
  )
}

export default Admin