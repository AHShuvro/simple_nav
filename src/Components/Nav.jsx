
import logo from '/public/vite.svg'
import NavLinks from './NavLinks'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from 'react';


function Nav() {
    const links = [
        {
            name: `Men's`, subMenu: true, children: [
                {
                    head: "Topwear",
                    subLink: [
                        { name: 'T-shirts', link: '/mens/topwear/tshirts' },
                        { name: 'Shirts', link: '/mens/topwear/shirts' },
                        { name: 'Jackets', link: '/mens/topwear/jackets' },
                        { name: 'Sweaters', link: '/mens/topwear/sweaters' },
                        { name: 'Hoodies', link: '/mens/topwear/hoodies' },
                    ]
                },
                {
                    head: "Bottomwear",
                    subLink: [
                        { name: 'Jeans', link: '/mens/bottomwear/jeans' },
                        { name: 'Trousers', link: '/mens/bottomwear/trousers' },
                        { name: 'Shorts', link: '/mens/bottomwear/shorts' },
                    ]
                },
                {
                    head: "Footwear",
                    subLink: [
                        { name: 'Sneakers', link: '/mens/footwear/sneakers' },
                        { name: 'Formal Shoes', link: '/mens/footwear/formal-shoes' },
                        { name: 'Sandals', link: '/mens/footwear/sandals' },
                    ]
                }
            ]
        },
        {
            name: `Women's`, subMenu: true,
            children: [
                {
                    head: "Topwear",
                    subLink: [
                        { name: 'Tops', link: '/womens/topwear/tops' },
                        { name: 'Blouses', link: '/womens/topwear/blouses' },
                        { name: 'Dresses', link: '/womens/topwear/dresses' },
                    ]
                },
                {
                    head: "Bottomwear",
                    subLink: [
                        { name: 'Skirts', link: '/womens/bottomwear/skirts' },
                        { name: 'Pants', link: '/womens/bottomwear/pants' },
                    ]
                },
                {
                    head: "Footwear",
                    subLink: [
                        { name: 'Flats', link: '/womens/footwear/flats' },
                        { name: 'Heels', link: '/womens/footwear/heels' },
                        { name: 'Boots', link: '/womens/footwear/boots' },
                    ]
                }
            ]
        },
        {
            name: `Kid's`, subMenu: true,
            children: [
                {
                    head: "Boys",
                    subLink: [
                        { name: 'T-shirts', link: '/kids/boys/tshirts' },
                        { name: 'Pants', link: '/kids/boys/pants' },
                    ]
                },
                {
                    head: "Girls",
                    subLink: [
                        { name: 'Dresses', link: '/kids/girls/dresses' },
                        { name: 'Skirts', link: '/kids/girls/skirts' },
                    ]
                },
                {
                    head: "Footwear",
                    subLink: [
                        { name: 'Sneakers', link: '/kids/footwear/sneakers' },
                        { name: 'Sandals', link: '/kids/footwear/sandals' },
                    ]
                }
            ]
        },
    ];
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className='bg-white w-full relative'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 md:w-auto w-full flex justify-between items-center px-4 py-4'>
                    <img src={logo} alt="logo" className='md:cursor-pointer h-9' />
                    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden '>
                        {
                            open ?
                                <IoClose />
                                :
                                <FaBars />
                        }
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins] '>
                    <li className='py-7 px-3 inline-block cursor-pointer'>
                        Home
                    </li>




                    {
                        links.map((link, idx) => (
                            <div key={idx} className='px-3 text-left md:cursor-pointer group'>

                                <div className='flex items-center gap-2 '>
                                    <li className='py-7'>{link.name}</li>
                                    <FaAngleUp className='group-hover:block hidden' />
                                    <FaAngleDown className=' group-hover:hidden' />
                                </div>
                                {
                                    link.subMenu && (
                                        <div>
                                            <div className='absolute left-0 top-20 hidden group-hover:md:block hover:md:block'>
                                                <div className='bg-white px-8 w-screen grid grid-cols-4 gap-4'>
                                                    {
                                                        link.children?.map((child, idx) => (
                                                            <div key={idx}>
                                                                <li className='text-lg font-semibold'>{child.head}</li>
                                                                {
                                                                    child.subLink?.map((link, idx) => (
                                                                        <div key={idx}> <li className='text-base text-gray-600 hover:text-blue-700 my-2'>{link.name}</li></div>
                                                                    ))
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                    {/* <NavLinks /> */}
                </ul>
                <button className='md:block hidden bg-blue-600 px-6 py-2 rounded-full text-white'>Get Started</button>


                {/* mobile nav  */}
                <ul className={`${open ? "left-0" : "left-[-100%]"}  md:hidden absolute top-0 w-full h-full bottom-0 duration-500`}>
                    <div className='bg-white pl-4 py-24'>
                        <li className='px-3 pb-7 text-left text-lg font-medium md:cursor-pointer'>Home</li>



                        {
                            links.map((link, idx) => (
                                <div key={idx}>
                                    <div className='px-3 text-left md:cursor-pointer group'>
                                        <div onClick={() => dropdown !== link.name ? setDropdown(link.name) : setDropdown('')} className='flex justify-between items-center w-full '>
                                            <li className='py-7 text-lg font-medium'>{link.name}</li>
                                            {
                                                dropdown === link.name ? <FaAngleUp /> : <FaAngleDown />
                                            }
                                        </div>
                                        {
                                            link.subMenu && (
                                                <div>
                                                    <div className='absolute left-0 top-20 hidden group-hover:md:block hover:md:block'>
                                                        <div className='bg-white px-16 w-screen grid grid-cols-4 gap-4'>
                                                            {
                                                                link.children?.map((child, idx) => (
                                                                    <div key={idx}>
                                                                        <li className='text-lg font-semibold'>{child.head}</li>
                                                                        {
                                                                            child.subLink?.map((link, idx) => (
                                                                                <div key={idx}> <li className='text-base text-gray-600 hover:text-blue-700 my-2'>{link.name}</li></div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className={`${dropdown === link.name ? "md:hidden" : "hidden"}`}>
                                        {
                                            link.children.map((child, idx) => (
                                                <div key={idx}>
                                                    <li className='text-lg py-4 pl-7 pr-5 md:pr-0 font-semibold'>{child.head}</li>
                                                    {
                                                        child.subLink?.map((link, idx) => (
                                                            <div key={idx}>
                                                                <li onClick={() => setOpen(!open)} className='text-base text-gray-600 hover:text-blue-700 py-3 pl-14'>{link.name}</li>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        {/* <NavLinks /> */}
                        <button className='block md:hidden bg-blue-600 px-4 py-2 rounded-full text-white'>Get Started</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav