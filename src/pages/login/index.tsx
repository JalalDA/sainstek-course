import Button from '@/components/atoms/Button'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

type Props = {}

const Login = (props: Props) => {

  const [showPass, setShowPass] = useState(false)
  const router = useRouter()
  return (
    <div className='bg-white dark:bg-[#333333] h-screen flex items-start justify-between p-0'>
      <Head><title>Login</title></Head>
      <div className="w-1/2 hidden md:block h-screen bg-gradient-to-r from-blue-500 to-purple-700"></div>
      <div className="md:w-1/2 w-full p-4 h-screen flex items-center justify-center flex-col md:p-32">
        <div className="text-lg mb-4 text-blue-500 font-bold">Login</div>
        <form className='p-4 w-full border border-gray-200 rounded-lg'>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500'
          >
            <input placeholder='Username . . .' className='outline-none w-full dark:bg-gray-500' id='username' name='username' type="text" />
          </div>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          {/* <div className='mt-4 p-2 rounded-lg border border-gray-200'
          >
            <input placeholder='Email . . . ' className='outline-none w-ful' id='username' name='username' type="text" />
          </div> */}
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500 flex items-center '
          >
            <input placeholder='Password . . .' className='outline-none w-full dark:bg-gray-500 ' id='username' name='username' type={showPass ? "text" : "password"} />
            <div onClick={()=>{setShowPass(!showPass)}} className="text-gray-500 dark:text-gray-200 cursor-pointer">
              {
                showPass ?
                  <FaEyeSlash /> : <FaEye />
              }
            </div>
          </div>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          {/* <div className='mt-4 p-2 rounded-lg border border-gray-200'
          >
            <input className='outline-none w-ful' id='username' name='username' type="text" />
          </div> */}
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          {/* <div className='mt-4 p-2 rounded-lg border border-gray-200 flex items-center '
          >
            <input placeholder='Confirm Password . . .' className='outline-none w-full ' id='username' name='username' type={confirmPass ? "text" : "password"} />
            <div onClick={()=>{setConfirmPass(!confirmPass)}} className="text-gray-500 cursor-pointer">
              {
                confirmPass ?
                  <FaEyeSlash /> : <FaEye />
              }
            </div>
          </div> */}
          {/* <div className='mt-4 p-2 mb-4 rounded-lg border border-gray-200'
          >
            <input className='outline-none w-ful' id='username' name='username' type="text" />
          </div> */}
          <div className='flex items-center justify-center mt-8'>
            <Button title='Login' />
          </div>
          <div className="text-xs text-gray-400 mt-4 text-center">Tidak punya akun? <b onClick={()=>router.push('/register')} className='text-blue-500 cursor-pointer'>Daftar</b></div>
        </form>
      </div>
    </div>
  )
}

export default Login