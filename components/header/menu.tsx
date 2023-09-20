import React from 'react'
import { IMenuItem } from '.'
import { Link } from '@mui/material'

export default function HeaderMenu({ menuItems, isMenuOpen }: { menuItems: IMenuItem[], isMenuOpen: boolean }) {


    return (
        <div className='bg-white border-y border-y-gray-200'>
            <nav
                className={`bg-white flex md:items-center gap-8 container mx-auto my-4 px-4
                    ${isMenuOpen ? 'flex flex-col sm:justify-start sm:items-start' : 'hidden md:flex md:flex-row'}

            `}>
                {
                    menuItems.map((item, index) =>
                        <Link
                            href={item.path}
                            key={index}
                            className='text-blue-900'
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
