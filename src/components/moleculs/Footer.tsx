import React from 'react'
import Image from 'next/image'
// import logo from '@/assets/images/mylogo.png'
// import facebook from "@/assets/icons/facebook.png";
// import instagram from "@/assets/icons/instagram.png";
// import youtube from "@/assets/icons/youtube.png";
// import tik_tok from "@/assets/icons/tik_tok.png";

type Props = {}

const Footer = (props: Props) => {
    // const icons = [
    //     {
    //         icon: facebook,
    //     },
    //     {
    //         icon: instagram,
    //     },
    //     {
    //         icon: youtube,
    //     },
    //     {
    //         icon: tik_tok,
    //     }
    // ]
    return (
        <div className="w-full z-20">
            <div className='flex flex-col-reverse p-4 md:flex-row items-start justify-evenly md:p-16 bg-gradient-to-r from-blue-500 to-purple-700 w-full z-20'>
                {/* social media */}
                <div className="logo flex mt-4 items-center justify-center flex-col gap-y-8 z-20 bg-blue-5000 h-42 w-full md:w-1/3">
                    {/* <Image height={160} width={160} src={logo} alt='logo' /> */}
                    {/* <div className="flex items-center justify-center gap-x-4">
                        {icons.map((item, index) => (
                            <Image height={40} width={40} key={index} src={item.icon} alt='icon' />
                        ))}
                    </div> */}
                </div>
                <div className="logo flex flex-col text-white dark:text-white items-start py-4 md:items-end justify-center p-2 h-42 w-full md:w-1/3">
                    <div className="flex-col items-start">
                        <div className=" text-lg font-bold">Hubungi Kami</div>
                        <div className=" text-md mt-4">Telepon : 081234567890</div>
                        <div className=" text-md">Email : contact@sainstekpringsewu.com</div>
                        <div className=" text-md font-bold mt-4">Kalirejo, Lampung Tengah</div>
                        <div className=" text-md">Desa Kalirejo, Kabupaten Lampung Tengah</div>
                        <div className=" text-md">Lampung 34174</div>
                    </div>
                </div>
                <div className="logo flex flex-col text-white dark:text-white items-start md:items-center justify-center p-2 h-42 w-full md:w-1/3">
                    <div className="flex-col items-start">
                        <div className=" text-lg font-bold">Layanan</div>
                        <div className=" text-md">Resto</div>
                        <div className=" text-md">Kolam Sprint</div>
                        <div className=" text-md">Saung</div>
                        <div className=" text-md">Free Karaoke</div>
                        <div className=" text-md">Syarat dan Ketentuan</div>
                        <div className=" text-md">Kebijakan Privasi</div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 p-4 w-full text-white dark:text-white flex flex-col md:flex-row items-center justify-center gap-x-2">
                <div className="text-sm">© 2023</div>
                <div className="flex items-center jutify-center gap-x-1">
                    <div className="text-sm">Created with</div> <div className="text-red-500">&hearts;</div> <div className='text-sm'>by Jalal D. Alkhotami</div>
                </div>
            </div>
        </div>
    )
}

export default Footer