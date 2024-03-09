import Button from '@/components/atoms/Button'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonLoading from '@/components/atoms/ButtonLoading'
import { toast, useToast } from 'react-toastify'
import CustomAxios from '@/config/axios'

type Props = {}

const Karir = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [file, setSelectedFiles] = useState<File | null>(null)

  interface FormValues {
    username: string;
    email: string;
    phone: string;
    address: string;
    resume: FileList | null;
  }

  const initialValues: FormValues = {
    username: '',
    email: '',
    phone: '',
    address: '',
    resume: null,
  };


  const validationSchema = Yup.object({
    username: Yup.string().required('Mohon isi nama lengkap anda'),
    email: Yup.string().email('Alamat email invalid').required('Mohon isi email anda'),
    phone: Yup.string().required('Mohon isi nomor hanphone anda'),
    address: Yup.string().required("Mohon isi alamat lengkap anda"),
    resume: Yup.mixed().required('Silakan lampirkan resume / cv anda')
  });


  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setSelectedFiles(file);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      if(!file){
        return ;
      }
      const formData = new FormData()

      formData.append("username", username)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("address", address)
      formData.append("file", file)

      const response = await CustomAxios.post(`/apply`, formData)
      if(response.status == 200){
        toast.success("Berhasil kirim lamaran")
        window.location.reload();
      }
    } catch (error) {
      console.log({error});
      
    }
    setIsLoading(false)
  };

  return (
    <div className='bg-white dark:bg-white dark:text-black'>
      <Head><title>Karir</title></Head>
      <Navbar />
      <div className="p-4 md:p-16">
        <div className="text-xl font-bold">Lowongan Pekerjaan Sales Marketing</div>
        <div className="tex-md font-light mt-4 md:w-2/3">
          Halo, kami lagi nyari nakama baru nih dengan role sales marketing, buat kamu yang tertarik buat join sama tim kami, silakan isi form di bawah ya.
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form >
            <div className='input-container flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="username">Username</label>
              <Field value={username} onChange={(e:any)=>setUsername(e.target.value)} className="input-field border border-gray-200 rounded-md p-1 outline-none" type="text" id="username" name="username" />
              <ErrorMessage className='error-message text-xs text-red-500 font-bold' name="username" component="div" />
            </div>

            <div className='input-container flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="email">Email</label>
              <Field value={email} onChange={(e:any)=>setEmail(e.target.value)} className="input-field border border-gray-200 rounded-md p-1 outline-none" type="email" id="email" name="email" />
              <ErrorMessage className='error-message text-xs text-red-500 font-bold' name="email" component="div" />
            </div>

            <div className='input-container flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="phone">Phone</label>
              <Field value={phone} onChange={(e:any)=>setPhone(e.target.value)} className="input-field border border-gray-200 rounded-md p-1 outline-none" type="text" id="phone" name="phone" />
              <ErrorMessage className='error-message text-xs text-red-500 font-bold' name="phone" component="div" />
            </div>

            <div className='input-container flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="address">Address</label>
              <Field value={address} onChange={(e:any)=>setAddress(e.target.value)} className="input-field border border-gray-200 rounded-md p-1 outline-none" as="textarea" id="address" name="address" />
              <ErrorMessage className='error-message text-xs text-red-500 font-bold' name="address" component="div" />
            </div>

            <div className='input-container flex flex-col gap-2 md:w-1/2'>
              <label htmlFor="resume">Resume</label>
              <Field onChange={handleSelectedFile} className="input-field border border-gray-200 rounded-md p-1 outline-none" type="file" id="resume" name="resume" />
              <ErrorMessage className='error-message text-xs text-red-500 font-bold' name="resume" component="div" />
            </div>

            <ButtonLoading onClick={handleSubmit} isLoading={isLoading} buttonText='Kirim' />
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default Karir