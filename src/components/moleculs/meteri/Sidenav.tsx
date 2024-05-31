import React, { useState } from 'react';

import Link from 'next/link';

import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';
import { SIDENAV_ITEMS } from '@/types/constant';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

type Props = {
    title?: string
}

const SideNav = ({
    title
}: Props) => {

    return (
        <div className="md:w-60 bg-white text-black h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                    <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                    <span className="font-bold text-xl hidden md:flex">Logo</span>
                </Link>

                <div className="flex flex-col space-y-2  md:px-6 ">
                    <div className="text-md font-bold">{title}</div>
                    {SIDENAV_ITEMS.map((item, idx) => {
                        console.log(item.path);
                        return <MenuItem title={item.path} key={idx} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideNav;

const MenuItem = ({ item, title }: { item: SideNavItem, title:string }) => {
    const router = useRouter()
    const pathname = router.pathname
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const params = useParams()
    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-blue-400`}
                    >
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-semibold text-md  flex">{item.title}</span>
                        </div>

                        <div className={`${subMenuOpen ? 'rotate-180' : ''} flex `}>
                            <Icon color='#000' icon="lucide:chevron-down" width="24" height="24" />
                            {/* <RiArrowRightLine /> */}
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={`/materi/ . ${title}/${subItem.path}`}
                                        className={`hover:bg-blue-400 p-2 rounded-md shadow-md hover:text-white ${subItem.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
                        }`}
                >
                    {item.icon}
                    <span className="font-semibold text-xl flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
};