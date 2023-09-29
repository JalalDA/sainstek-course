import ButtonLoading from '@/components/atoms/ButtonLoading'
import { useAppDispatch } from '@/store'
import { loginSuccess } from '@/store/features/authSlice'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { toast, ToastContainer } from 'react-toastify'

type Props = {}

const Login = (props: Props) => {

  const [showPass, setShowPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const dispatch = useAppDispatch()
  const login = async () => {
      try {
          if (!username || !password) {
              return toast.error("Please fill this from")
          }
          setIsLoading(true)
          const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/login`, {
              username,
              password
          })
          console.log({ response });
          if (response.status === 200) {
              console.log({data : response.data});
              dispatch(loginSuccess(response.data))
              toast.success("Login Success, please wait . . .")
              router.push('/')
          }
      } catch (error) {
          console.log({ error });
          //@ts-ignore
          toast.error(error.response?.data?.msg || "Something wrong, try again later")
      }
      setIsLoading(false)
  }
  return (
    <div className='bg-white dark:bg-[#333333] h-screen flex items-start justify-between p-0'>
      <ToastContainer autoClose={1000}/>
      <Head><title>Login</title></Head>
      <div className="w-1/2 hidden md:block h-screen bg-gradient-to-r from-blue-500 to-purple-700"></div>
      <div className="md:w-1/2 w-full p-4 h-screen flex items-center justify-center flex-col md:p-32">
        <div className="text-lg mb-4 text-blue-500 font-bold">Login</div>
        <form className='p-4 w-full border border-gray-200 rounded-lg'>
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500'
          >
            <input onChange={e=>setUsername(e.target.value)} placeholder='Username . . .' className='outline-none w-full dark:bg-gray-500' id='username' name='username' type="text" />
          </div>
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500 flex items-center '
          >
            <input onChange={e=>setPassword(e.target.value)} placeholder='Password . . .' className='outline-none w-full dark:bg-gray-500 ' id='username' name='username' type={showPass ? "text" : "password"} />
            <div onClick={()=>{setShowPass(!showPass)}} className="text-gray-500 dark:text-gray-200 cursor-pointer">
              {
                showPass ?
                  <FaEyeSlash /> : <FaEye />
              }
            </div>
          </div>
          <div className='flex items-center justify-center mt-8'>
            <ButtonLoading onClick={login} buttonText='Login' isLoading={isLoading}/>
          </div>
          <div className="text-xs text-gray-400 mt-4 text-center">Tidak punya akun? <b onClick={()=>router.push('/register')} className='text-blue-500 cursor-pointer'>Daftar</b></div>
        </form>
      </div>
    </div>
  )
}

export default Login


