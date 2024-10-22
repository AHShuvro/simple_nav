import React, { Children } from 'react'

function NavLinks() {
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

    return (
        <>
            {
                links.map((link, idx) => (
                    <div key={idx} className='px-3 text-left md:cursor-pointer group'>
                        <li className='py-7'>{link.name}</li>
                        {
                            link.subMenu && (
                                <div>
                                    <div className='absolute top-20 hidden group-hover:block hover:block'>
                                        <div className='bg-white px-8 grid grid-cols-4 gap-4'>
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
        </>
    )
}

export default NavLinks