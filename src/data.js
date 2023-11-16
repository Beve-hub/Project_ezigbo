import {RiDashboardLine} from 'react-icons/ri'
import {MdOutlineFactory} from 'react-icons/md'
import {BsShop} from 'react-icons/bs'
import { MdLogout } from "react-icons/md";


export const link = [
    {
        name: 'Board',
        icon: <RiDashboardLine size={24}/>,
        path: '/Board'
    },
    {
        name: 'Supplier',
        icon: <BsShop size={24}/>,
        path: '/Supplier'
    },
    {
        name: 'Company',
        icon: <MdOutlineFactory size={24}/>,
        path: '/Company'
    }
]

export const lins = [
    {
        name: 'Board',
        icon: <RiDashboardLine size={24}/>,
        path: '/Board'
    },
    {
        name: 'Supplier',
        icon: <BsShop size={24}/>,
        path: '/Supplier'
    },
    {
        name: 'Company',
        icon: <MdOutlineFactory size={24}/>,
        path: '/Company'
    },

    {
        name: 'Logout',
        icon: <MdLogout size={24}/>,
        path: '/'
    }

]
