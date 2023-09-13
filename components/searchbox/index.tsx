import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import React, { useEffect } from 'react'

export interface IProps {
    onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: IProps) {

    const [searchValue, setSearchValue] = React.useState('');

    const handleSearch = () => {
        onSearch(searchValue);
    }

    return (
        <div className='flex items-center relative max-w-[16em]'>
            <input
                type="text"
                placeholder="¿Qué quieres buscar?"
                className="border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent h-10 w-full"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch} className='bg-red-500 rounded-full flex items-center justify-center h-10 w-10 absolute right-0'>
                <SearchIcon htmlColor='#fff' />
            </button>

        </div>
    )
}
