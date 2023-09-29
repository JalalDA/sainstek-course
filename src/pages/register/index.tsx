import Button from '@/components/atoms/Button'
import ButtonLoading from '@/components/atoms/ButtonLoading';
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify'

type Props = {}

const Register = (props: Props) => {
  const [showPass, setShowPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const registerUser = async () => {
    // e.preventDefault()
    if (!username || !email || !password || !phone) {
      return toast.error("Please fill the from first")
    }
    if (password !== confirmPassword) {
      return toast.error("Password dan confirm password tidak sama")
    }
    setIsLoading(true)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/register`, {
        username,
        email,
        password,
        phone
      })
      console.log({ response });
      if (response.status === 200) {
        toast.success("Register success, please login")
        router.push("/login")
      }
    } catch (error) {
      console.log({ error });
      console.log({ error });
      //@ts-ignore
      toast.error(error?.response?.data?.msg || "Something wrong, try again")
    }
    setIsLoading(false)
  }

  const router = useRouter()
  return (
    <div className='bg-white dark:bg-[#333333] h-screen flex items-start justify-between p-0'>
      <ToastContainer autoClose={1000} />
      <Head><title>Register</title></Head>
      <div className="w-1/2 hidden md:block h-screen bg-gradient-to-r from-blue-500 to-purple-700"></div>
      <div className="md:w-1/2 w-full p-4 h-screen flex items-center justify-center flex-col md:p-32">
        <div className="text-lg mb-4 text-blue-500 font-bold">Register</div>
        <form className='p-4 w-full border border-gray-200 rounded-lg'>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500'
          >
            <input onChange={e => setUsername(e.target.value)} placeholder='Username . . .' className='outline-none w-full dark:bg-gray-500' id='username' name='username' type="text" />
          </div>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500'
          >
            <input onChange={e => setEmail(e.target.value)} placeholder='Email . . . ' className='outline-none w-full dark:bg-gray-500' id='email' name='email' type="text" />
          </div>
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500'
          >
            <input onChange={e => setPhone(e.target.value)} placeholder='Phone Number . . .' className='outline-none w-full dark:bg-gray-500' id='phoneNumber' name='phoneNumber' type="text" />
          </div>
          {/* <label className='text-md mt-4' htmlFor="username">Username</label> */}
          <div className='mt-4 p-2 rounded-lg border border-gray-200 dark:bg-gray-500 flex items-center '
          >
            <input onChange={e => setPassword(e.target.value)} placeholder='Password . . .' className='outline-none w-full  dark:bg-gray-500 ' id='password' name='password' type={showPass ? "text" : "password"} />
            <div onClick={() => { setShowPass(!showPass) }} className="text-gray-500  dark:text-gray-200 cursor-pointer">
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
          <div className='mt-4 p-2 rounded-lg border border-gray-200 flex items-center  dark:bg-gray-500 '
          >
            <input onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm Password . . .' className='outline-none w-full  dark:bg-gray-500' id='confirmPassword' name='confirmPassword' type={confirmPass ? "text" : "password"} />
            <div onClick={() => { setConfirmPass(!confirmPass) }} className="text-gray-500   dark:text-gray-200 cursor-pointer">
              {
                confirmPass ?
                  <FaEyeSlash /> : <FaEye />
              }
            </div>
          </div>
          {/* <div className='mt-4 p-2 mb-4 rounded-lg border border-gray-200'
          >
            <input className='outline-none w-ful' id='username' name='username' type="text" />
          </div> */}
          <div className='flex items-center justify-center mt-8'>
            {/* <Button title={isLoading ? "Loading . . ." : 'Register'} /> */}
            <ButtonLoading isLoading={isLoading} buttonText='Daftar' onClick={registerUser}/>
          </div>
          <div className="text-xs text-gray-400 mt-4 text-center">Sudah punya akun? <b onClick={() => router.push('/login')} className='text-blue-500 cursor-pointer'>Login</b></div>
        </form>
      </div>
    </div>
  )
}

export default Register

// import Button from '@/components/atoms/Button'
// import Footer from '@/components/moleculs/Footer'
// // import Promo from '@/components/moleculs/Promo'
// import Head from 'next/head'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React, { useState } from 'react'
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import axios from 'axios'
// // import Loading from '@/components/atoms/Loading'
// import { toast, ToastContainer } from 'react-toastify'
// import { useGoogleLogin } from '@react-oauth/google'
// import { useAppDispatch } from '@/store'
// import { loginSuccess } from '@/store/features/authSlice'
// // import CustomButton from '@/components/atoms/CustomButton'

// type Props = {}

// const Signup = (props: Props) => {
//   const [showPass, setShowPass] = useState(false)
//   const router = useRouter()
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")
//   const [phone, setPhone] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const dispatch = useAppDispatch()

//   const signUp = async () => {
//     if (!username || !email || !password || !phone) {
//       return alert("Please fill the from first")
//     }
//     setIsLoading(true)
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/signup`, {
//         username,
//         email,
//         password,
//         phone
//       })
//       console.log({ response });
//       if (response.status === 200) {
//         toast.success("Register success, please login")
//         router.push("/login")
//       }
//     } catch (error) {
//       console.log({ error });
//       //@ts-ignore
//       toast.error(error?.response?.data?.msg || "Something wrong, try again")
//     }
//     setIsLoading(false)
//   }

//   const loginGoogle = useGoogleLogin({
//     onSuccess: async ({ access_token }) => {
//       try {
//         const userInfo = await axios.get(
//           'https://www.googleapis.com/oauth2/v3/userinfo',
//           { headers: { Authorization: `Bearer ${access_token}` } },
//         );
//         const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/google`, {
//           email: userInfo.data?.email,
//           username: userInfo.data?.name,
//           photo: userInfo.data?.picture
//         })
//         dispatch(loginSuccess(response.data))
//         router.push("/")
//       } catch (error) {
//         console.log({ error });
//       }
//     }
//   })
//   return (
//     <div className='text-black dark:text-black' key={"asdasd"}>
//       <Head><title>Signup</title></Head>
//       <ToastContainer autoClose={1000} />
//       <div className="relative flex items-center w-full bg-white justify-between p-0">
//         <div className="h-screen w-1/2 bg-gradient-to-r from-blue-200 to-purple-700"></div>
//         <div className='w-full md:w-1/2 md:p-8 p-4 flex items-center justify-start flex-col h-[46rem] md:h-[50rem]'>
//           <div className="flex items-center justify-between w-full">
//             <div className="flex items-center justify-center gap-x-2">
//               <Image src={'/images/logo.png'} alt='logo' height={24} width={24} />
//               <div className="text-xl font-bold">Coffeeland</div>
//             </div>
//             {/* <Button onClick={()=>{router.push("/login")}} title={"Login"} styles={"bg-yellow-500 text-amber-800"} /> */}
//             <Button title='Login' />
//           </div>
//           <div className="text-3xl text-amber-900 font-bold mt-4">Signup</div>
//           <form action="" className='mt-8 bg-white shadow-xl rounded-lg w-full md:w-4/5 md:p-8 p-4'>
//             <div className="mb-4 flex flex-col w-full">
//               <label className='font-bold' htmlFor="username">Username :</label>
//               <input id='username' name='username' onChange={(e) => { setUsername(e.target.value) }} type="text" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
//             </div>
//             <div className="mb-4 flex flex-col w-full">
//               <label className='font-bold' htmlFor="email">Email Adress :</label>
//               <input id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} type="text" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
//             </div>
//             <div className="mb-4 flex flex-col w-full">
//               <label className='font-bold' htmlFor="password">Password :</label>
//               <div className="relative w-full">
//                 <div onClick={() => {
//                   setShowPass(!showPass)
//                 }} className='cursor-pointer'>
//                   {showPass ? <FaEyeSlash className='top-5 absolute right-4' /> : <FaEye className='top-5 absolute right-4' />}
//                 </div>
//                 <input id='password' name='password' onChange={(e) => setPassword(e.target.value)} type={showPass ? "text" : "password"} className='mt-2 p-2 w-full outline-yellow-500 border border-gray-100 rounded-lg' />
//               </div>
//             </div>
//             <div className="mb-4 flex flex-col w-full">
//               <label className='font-bold' htmlFor="phone">Phone Number :</label>
//               <input id='phone' name='phone' onChange={e => setPhone(e.target.value)} type="number" className='mt-2 p-2 outline-yellow-500 border border-gray-100 rounded-lg' />
//             </div>
//             <div onClick={() => router.push("/forgot")} className="text-sm text-amber-800 font-bold underline cursor-pointer mb-4">Forgot password?</div>
//             {/* <Button onClick={signUp} title={isLoading ? <Loading/> : "Signup"} styles={"mt-12 bg-yellow-500 text-amber-800 text-xl"} />
//                         <CustomButton icon={true} styles={"mt-4 bg-white shadow-xl"} onClick={()=>loginGoogle()} title="Sign up With Google"/> */}
//             <Button onClick={signUp} title='Register' />
//           </form>
//         </div>
//       </div>
//       {/* <Promo /> */}
//       <Footer />
//     </div>
//   )
// }

// export default Signup