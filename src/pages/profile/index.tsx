import ButtonLoading from '@/components/atoms/ButtonLoading'
import LayoutProfile from '@/components/moleculs/profile/LayoutProfile'
import CustomAxios from '@/config/axios'
import { RootState } from '@/store/reducers'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { getSuccess } from '@/store/features/userSlice'

type Props = {
    children?: React.ReactNode
}

const Profile = (props: Props) => {
    const user = useSelector((state: RootState) => state.user.user)
    const [editable, setEditable] = useState(true)
    const [isLoadingEdit, setIsLoadingEdit] = useState<boolean>(false)
    const [username, setUsername] = useState<string>(user.username || "")
    const [first_name, setFirstName] = useState<string>(user.first_name || "")
    const [last_name, setLastName] = useState<string>(user.first_name || "")
    const [phone_number, setPhoneNumber] = useState<number>(user?.phone_number || 0)
    const [address, setAddress] = useState(user.address || "")
    const [gender, setGender] = useState({
        label: user.gender || "",
        value: user.gender || "",
    })
    const genderOptions = [
        {
            value: "Laki - Laki",
            label: "Laki - Laki"
        },
        {
            value: "Perempuan",
            label: "Perempuan"
        }
    ]
    

    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const updateUser = async () => {
        if (editable) {
            return toast.error("Please press edit first")
        }
        setIsLoadingEdit(true)
        try {
            const data = await CustomAxios.patch(`/user`, {
                username,
                first_name,
                last_name,
                gender: gender.value,
                phone_number,
                address
            })
            if (data.status == 200) {
                dispatch(getSuccess(data?.data?.user))
                toast.success(data?.data?.msg || "Success update user")
                window.location.reload();
            }
        } catch (error: any) {
            console.log({ error });
            toast.error(error?.response?.data?.error || "Somtehing went wrong, try again later")
        }
        setIsLoadingEdit(false)
    }


    return (
        <LayoutProfile>
            <div className="mb-6 flex items-center justify-start gap-x-8">
                <div className="text-md font-bold">Profile Saya</div>
                <div onClick={() => {
                    inputRef.current?.focus();
                    setEditable(!editable)
                }} className="underline text-md text-blue-500 cursor-pointer">Edit</div>
            </div>
            <form >
                <div className='flex flex-col gap-y-2 mb-2'>
                    <label htmlFor="username">Username</label>
                    <input onChange={e => setUsername(e.target.value)} ref={inputRef} disabled={editable} id='username' className='border border-gray-300 dark:bg-white dark:text-black dark:outline-none rounded-md p-2' type="text" value={username} />
                </div>
                <div className='flex flex-col gap-y-2 mb-2'>
                    <label htmlFor="firstname">Nama Depan</label>
                    <input onChange={e => setFirstName(e.target.value)} disabled={editable} id='firstname' className='border border-gray-300 rounded-md p-2 dark:bg-white dark:text-black dark:outline-none ' type="text" value={first_name} />
                </div>
                <div className='flex flex-col gap-y-2 mb-2'>
                    <label htmlFor="lastname">Nama Belakang</label>
                    <input onChange={e => setLastName(e.target.value)} disabled={editable} id='lastname' className='border border-gray-300 rounded-md p-2 dark:bg-white dark:text-black dark:outline-none ' type="text" value={last_name} />
                </div>
                <div className='flex flex-col gap-y-2 mb-2 dark:bg-white dark:text-black dark:outline-none '>
                    <label htmlFor="gender">Jenis Kelamin</label>
                    <Select isDisabled={editable} defaultValue={gender} onChange={e => setGender({ value: e?.value || "", label: e?.label || "" })} options={genderOptions} />
                </div>
                <div className='flex flex-col gap-y-2 mb-2'>
                    <label htmlFor="phone">Nomor Handphone</label>
                    <div className='border border-gray-300 rounded-md p-2 flex items-center justify-start gap-x-4'>
                        <div className="">+62</div>
                        <input onChange={e => setPhoneNumber(Number(e.target.value))} disabled={editable} id='phone' className='bg-white outline-none dark:bg-white dark:text-black dark:outline-none ' type="number" value={phone_number} />
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 mb-2'>
                    <label htmlFor="address">Alamat</label>
                    <textarea onChange={e => {
                        setAddress(e.target.value)
                    }} disabled={editable} id='address' className='border border-gray-300 rounded-md p-2 h-32 dark:bg-white dark:text-black dark:outline-none ' value={address} />
                </div>
            </form>
            <div className='mt-4'></div>
            <ButtonLoading buttonText='Update' isLoading={isLoadingEdit} onClick={updateUser} />
        </LayoutProfile>
    )
}

export default Profile