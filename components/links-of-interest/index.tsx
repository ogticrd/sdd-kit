import React, { useEffect } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';

export default function LinksOfInterest({ dark = false }: { dark?: boolean }) {

    interface ILinkInterestItem {
        name: string;
        path: string;
        category: string;
        icon: string;
    }

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const links: ILinkInterestItem[] = [
        {
            name: 'Construcción',
            path: 'https://construccion.com',
            category: 'Ventanilla',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        },
        {
            name: 'Inversión',
            path: 'https://inversion.com',
            category: 'Ventanilla',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        },
        {
            name: 'Educación',
            path: 'https://educacion.com',
            category: 'Ventanilla',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        },
        {
            name: 'Servicios GOB',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://juventud.gob.do/wp-content/themes/egovt/assets/img/kit/Gob.do.png'
        }, {
            name: 'Observatorio MAP',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://pbs.twimg.com/profile_images/552893589076733952/Vmr4JMgm_400x400.jpeg'
        }, {
            name: '311',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAsVBMVEX///8UPnoAtjvq7fIANnYAMHM6XY6rtcnG0N/a4eoPO3kAtTcAuUHk9utvhakFOXj5/vtjz4JTz4Sy58aZ364AsywuToS9x9nT8+D19/oiu0yTpcCn5b2Hmrrc9uiwu84px2tXcZtGYpLFzt3g5u2Hm7nW3ukAu0i77tEAvlEvU4kALnJmfKSdrMZUbppLZpN3jK8gR4FEx2t72J3F7tWM4Kyc5ryu6cVt2JkUwl0AsB/LWjd3AAAE30lEQVR4nO3cbXeaSByGcZ40wlixW03KGtf4hDVqDNusXff7f7AFUxQYEmH4c5DhvvqmORHD+Z1xZFBQFIQQQgghhNC1nLlT9S7IkLmc6VXvQ/1zJs+bNhyL5vbuLQuOBXOWqmGpcCzYfKtaqgrHYi3Gtq2qcCzYfG9bKhwL5m6NkBGOwjm7fYgIR/EepnaEEY5i6bvnqCIcxXJnRpwRjiLpL7aqwrFwi5kFR4LgSBMcaYIjTXCkCY7imePO+f9wFM2ZzFoRxz0chTJ7qmFcHJ1pcBxuWR4c8+Ts2ralJh0t73VpwDF782krGH5xR8vez5VJC45Z00f371IxR8Mb+W53cMxapx2e2Yk6vmxPP8AxY/qrd35njjgqnfcvocAxW7t263KAE3X8HRyz1Ol50cNEOAql77zYBzBwFMmZT9XEmgWOAs097pMDOAoUOcKGY4EmBhwpgiNNcKQJjjRJ4vjlj8K9RZ5usu1laRfZQhJHjRVMe4w83XhjZcjoXbaQxbGrFYt1Y468Sko2HMtxtL09HAkc9w9uZHUIRxHHlmGPdcWMbAhHEcdNL2CDY0HH+ej0yQEcCzr+Do4xxyUcNeb/y62YdOTPJjbNUWw1Mxyy+HrG+CC7MY4a+/urSNnW11uvKY5M+6X0BYo/oZOeYrab4/itxD+0aFtwJAiONMGRJn0GR4rev6EMx6LBkSY40gRHmuBIExxpgiNNcKQJjjTBUaCUO6/qU6wL86aP+JbPcMxbZ9Piit7OCI7Z6nCXIMSDY7bgSBMcaYIjTXCkCY40wZEmONIER5o6hs1f7AHH3LntlBr0PSm68z18+gvOU1CE8480OS9wpAjjkSanh/mRIjjSBEea4EgTHGmCI01wpAmONDXGUSvbsSHrmZIdlaaMR8a6P79xvfX5bd7iD/kS+dXi4aMmjTlvlnbl8PDpr+QW/cdh/DHx66/tj7o4ye2opVzGnuZ4WAU3kToPYtxX4dTn91VgjHM8sDg3HE/ldfxnlRi1Io7WK7cfzXLsJ0ejmKM64vajWY6HNTeHCjha3gO3H01y7B/S3ooEHGe8RJMcublR0NEY8/vRIMfDkJschRyte5ffj+Y4po5Gv7z3k7K9Xcp+1N4xbRWT5viYPG5Mva/rsnXllq628XyXcnVN/R3Xf3J1Ge846LK4Yjd89PpX5OlG3v3nzcYpL2ql/o7973w/h5wjt4o5Hs4Pj57J0N3PM9PGYlDdHdMacI7JuZGtqU+xNcIxPhr9OXH9ePVJcia3o3ZyHKwTc+P6B/nflNsxOG/GralZ7J2FKMkd/fHIzY2rMj5+kNvRf13/qyXnxhJGo/yOieUOYyv6uTFIckeNmxtL+kxRbsfkiYmyRqPsjonXNDuSHzeGmZcbFNsb2R1LOG4Mi93SYsH9WirH8kbj1SRyLHM0Xk0aR39uLPXbP1eSxJGVdtyYMWkcy1nFZE4Wx9Xb9c3KTA7HqkejFI7B3FjxaJTEkf7sd+5kcKzyuDGs/o63MBpr78hKXVPnqPaOZZ1vzFndHatdxVyqt2P1x41hNXYM5sbKjxvDau14vJXRWG/H4/eqd+RSfR3Z8WZe1H53m7OjXStH9nRDo1FRHNcMc82qdyZrvuPw6ZZGY00bDG9sNNa0wX8YjRQN1txFrkigH40ajf8Df0PLSY1K2JMAAAAASUVORK5CYII='
        }, {
            name: '911',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScofVn7Bv9XBkxWz5ZvySsz--e1WSIa2aVlnQUOUV3v6om2HR735m-W-PP1Aa0NPX1lMA&usqp=CAU'
        }, {
            name: 'Mejora Regulatoria',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        }, {
            name: 'E-ticket',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        }, {
            name: 'Beca tu Futuro',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        }, {
            name: 'Dominicana GOB',
            path: 'https://serviciosgob.com',
            category: 'Portales',
            icon: 'data:image/png;base64,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'
        }, {
            name: 'MINPRE',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
        }, {
            name: 'OGTIC',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJKHDIJ18Na5y6WIHHyKKEVTYekYxfKY6g8z-Oiv1bib68dQ91hoXy8Eo-3pdfdUUoPA&usqp=CAU'
        }, {
            name: 'MAP',
            path: 'https://minpre.com',
            category: 'Instituciones',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCLfYmJ-yeKlEzZFRsalOWWIRMq2mUfL4pGL7boHe9OMX8KsgFD-d2XiFTij8QedCbvg&usqp=CAU'
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
            <AppsIcon fontSize='large' htmlColor={dark ? '#fff' : 'rgb(30 58 138)'} onClick={
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
