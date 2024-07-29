import React, { useEffect } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';

import Cupula from '../../stories/assets/icons/cupula.png'
import GobDO from '../../stories/assets/icons/gob-do.png'
import ObservatorioMap from '../../stories/assets/icons/observatorio-map.jpeg'
import Logo311 from '../../stories/assets/icons/311.png'
import Logo911 from '../../stories/assets/icons/911.png'
import DominicanaGOB from '../../stories/assets/icons/dominicana-gob.png'
import Ogtic from '../../stories/assets/icons/ogtic.jpeg'

export interface ILinkInterestItem {
    name: string;
    path: string;
    category: string;
    icon: string;
}

export const LinksOfInterest = ({ dark = false }: { dark?: boolean }) => {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const links: ILinkInterestItem[] = [
        {
            name: 'Construcción',
            path: 'https://construccion.com',
            category: 'Ventanilla',
            icon: Cupula.src
        },
        {
            name: 'Inversión',
            path: 'https://inversion.com',
            category: 'Ventanilla',
            icon: Cupula.src
        },
        {
            name: 'Educación',
            path: 'https://educacion.com',
            category: 'Ventanilla',
            icon: Cupula.src
        },
        {
            name: 'Servicios GOB',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: GobDO.src
        }, {
            name: 'Observatorio MAP',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: ObservatorioMap.src
        }, {
            name: '311',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: Logo311.src
        }, {
            name: '911',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: Logo911.src
        }, {
            name: 'Mejora Regulatoria',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: Cupula.src
        }, {
            name: 'E-ticket',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: Cupula.src
        }, {
            name: 'Beca tu Futuro',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: Cupula.src
        }, {
            name: 'Dominicana GOB',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: DominicanaGOB.src
        }, {
            name: 'MINPRE',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: Cupula.src
        }, {
            name: 'OGTIC',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: Ogtic.src
        }, {
            name: 'MAP',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: Cupula.src
        },
    ]

    const categories = Array.from(new Set(links.map(link => link.category)));

    useEffect(() => {
        const closeMenu = () => {
            setIsMenuOpen(false);
        }
        window.addEventListener('click', closeMenu);
        return () => window.removeEventListener('click', closeMenu);
    })

    return (
        <div className='relative w-fit' onClick={(e) => {
            e.stopPropagation();
        }}>
            <AppsIcon style={{ cursor: "pointer" }} fontSize='large' htmlColor={dark ? '#fff' : 'rgb(30 58 138)'} onClick={
                () => setIsMenuOpen(!isMenuOpen)
            } />
            {
                isMenuOpen &&
                <div className='fixed md:absolute top-0 right-0 z-50 border border-gray-200 bg-white shadow-md w-full md:w-80 h-screen md:h-auto px-4 py-2 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <p className='text-blue-900'>Enlaces de interes</p>
                        <button className='rounded-full border-2 border-blue-900 h-6 w-6 flex items-center justify-center'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <CloseIcon className='text-blue-900' />
                        </button>
                    </div>
                    <div className='border-b border-gray-300 w-full my-2'></div>
                    <div className='max-h-screen md:max-h-[40rem] overflow-y-auto pr-2'>
                        {
                            categories.map((category, index) =>
                                <div key={index} className='flex flex-col'>
                                    <p className='text-md text-gray-600'>{category}</p>
                                    <div className='border-b border-gray-300 w-full my-2'></div>
                                    <div className='grid grid-cols-3 gap-4 py-8'>
                                        {
                                            links.filter(link => link.category === category).map((link, index) =>
                                                <a href={link.path} target='_blank' key={index} className='flex flex-col items-center gap-2'>
                                                    <img src={link.icon} alt={link.name} className='w-12 h-12 border rounded-full p-1 object-cover' />
                                                    <p className='text-center text-sm text-blue-900'>{link.name}</p>
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>
            }
        </div>
    )
}
