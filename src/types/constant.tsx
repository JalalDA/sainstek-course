import { SideNavItem } from ".";
import { Icon } from "@iconify/react";
import { RxHome } from "react-icons/rx";

export const SIDENAV_ITEMS :SideNavItem[] = [
    {
        title : "Pekan Ke 1",
        slug : "pekan-ke-1",
        path : '/pekan-ke-1',
        icon : <Icon icon={"lucide:folder"} width={24} height={24}/>,
        submenu : true,
        subMenuItems : [
            {
                title : "Berkanalan Dengan HTML dan CSS",
                path : "/berkenalan-dengan-html-dan-css",
                slug : "berkenalan-dengan-html-dan-css"
            },
            {
                title : "Responsive Web Dengan Tailwindcss",
                path : "/responsive-web-dengan-tailwindcss",
                slug : "/responsive-web-dengan-tailwindcss"
            },
            {
                title : "Berkenalan Dengan Figma Sebagai UI/UX tools",
                path : "/berkenalan-dengan-figma-sebagai-ui/ux-tools",
                slug :  "/berkenalan-dengan-figma-sebagai-ui/ux-tools"
            },
            {
                title : "Berkenalan Dengan Javascript",
                path : "/berkenalan-dengan-javascript",
                slug : "/berkenalan-dengan-javascript"
            },
            {
                title : "Berkenalan Dengan Javascript DOM",
                path : "/berkenalan-dengan-javascript-dom",
                slug : "/berkenalan-dengan-javascript"
            },
        ]
    },
    {
        title : "Pekan Ke 2",
        slug : "pekan-ke-2",
        path : '/pekan-ke-2',
        icon : <Icon icon={"lucide:folder"} width={24} height={24}/>,
        submenu : true,
        subMenuItems : [
            {
                title : "Berkanalan Dengan HTML dan CSS",
                path : "/berkenalan-dengan-html-dan-css",
                slug : "berkenalan-dengan-html-dan-css"
            },
            {
                title : "Responsive Web Dengan Tailwindcss",
                path : "/responsive-web-dengan-tailwindcss",
                slug : "/responsive-web-dengan-tailwindcss"
            },
            {
                title : "Berkenalan Dengan Figma Sebagai UI/UX tools",
                path : "/berkenalan-dengan-figma-sebagai-ui-ux-tools",
                slug :  "/berkenalan-dengan-figma-sebagai-ui-ux-tools"
            },
            {
                title : "Berkenalan Dengan Javascript",
                path : "/berkenalan-dengan-javascript",
                slug : "/berkenalan-dengan-javascript"
            },
            {
                title : "Berkenalan Dengan Javascript DOM",
                path : "/berkenalan-dengan-javascript-dom",
                slug : "/berkenalan-dengan-javascript"
            },
        ]
    },
]