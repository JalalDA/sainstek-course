import ButtonLoading from '@/components/atoms/ButtonLoading'
import { auth, provider } from '@/config/firebase'
import { useAppDispatch } from '@/store'
import { loginSuccess } from '@/store/features/authSlice'
import { RootState } from '@/store/reducers'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

type Props = {}

const Login = (props: Props) => {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const dispatch = useAppDispatch()

  const signIn = async () => {
    setIsLoading(true)
    try {
      const data = await signInWithPopup(auth, provider)
        //@ts-ignore
        const token = data.user?.accessToken
        const result = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/${process.env.NEXT_PUBLIC_API_VERSION}/auth/google`, { token })
        dispatch(loginSuccess(result.data))
        toast.success("Login Success, please wait . . .")
        router.push('/')
    } catch (error:any) {
      console.log({error});
      toast.error(error.response?.data?.msg || "Something wrong, try again later")
    }
    setIsLoading(false)
  }

  const token = useSelector((state:RootState)=>state.auth.token)

  useEffect(()=>{
    if(token){
      router.push("/")
    }
  }, [token])
  return (
    <div className='bg-white dark:bg-[#333333] h-screen flex items-start justify-between p-0'>
      <ToastContainer autoClose={1000} />
      <Head><title>Login</title></Head>
      <div className="w-1/2 hidden md:block h-screen bg-gradient-to-r from-blue-500 to-purple-700"></div>
      <div className="md:w-1/2 w-full p-4 h-screen flex items-center justify-center flex-col md:p-32">
        <div className="text-lg mb-4 text-blue-500 font-bold">Login / Register Into Your Account</div>
        <form className='p-4 w-full border border-gray-200 rounded-lg'>
          <div className='flex items-center justify-center mt-8'>
            <Image style={{marginRight : 20}} src={"/images/google.png"} height={32} width={32} alt='google' />
            <ButtonLoading onClick={signIn} buttonText='Login / Register With Google' isLoading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


