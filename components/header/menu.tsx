import React from 'react'
import Link from '@mui/material/Link'

import { MenuItemProps } from './'

export const HeaderMenu = ({ menuItems, isMenuOpen }: { menuItems: MenuItemProps[], isMenuOpen: boolean }) => {

    return (
        <div className='bg-white border-y border-y-gray-200 relative'>
            <nav
                className={`bg-white flex md:items-center gap-8 container mx-auto my-4 px-4 xl:relative
                    ${isMenuOpen ? 'flex flex-col sm:justify-start sm:items-start absolute -top-4 border w-screen -left-4 mx-auto py-4 shadow-md' : 'hidden md:flex md:flex-row'}
                    `}>
                {
                    menuItems.map((item, index) =>
                        <Link
                            href={item.path}
                            key={index}
                            className='text-blue-900 hover:text-blue-500'
                            underline='none'
                        >
                            {item.name}
                        </Link>
                    )
                }
            </nav>
        </div>
    )
}
