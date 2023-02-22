import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSearch from '../../components/nav-search'
import Sidebar from '../../components/sidebar'

const ShareLayout = () => {
    return (
        <div className='grid grid-cols-4 mt-[16px]'>
            <Sidebar />
            <div className='col-span-3 flex flex-col mr-[40px]'>
                <NavSearch />
                <div className=" mt-[40px]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ShareLayout
