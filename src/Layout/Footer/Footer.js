import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {

    const Links = [
        {
            title: 'Company',
            links: [
                {
                    name: 'Home',
                    links: '/'
                },
                {
                    name: 'About Us',
                    links: '/about-us'
                },
                {
                    name: 'Contact Us',
                    links: '/contact-us'
                },
                {
                    name: 'Movies',
                    links: '/movies'
                },


            ]
        },
        {
            title: 'Top Categories',
            links: [
                {
                    name: 'Action',
                    links: '#'
                },
                {
                    name: 'Romantic',
                    links: '#'
                },
                {
                    name: 'Drama',
                    links: '#'
                },
                {
                    name: 'Historical',
                    links: '#'
                },
            ]
        },
        {
            title: 'My Account ',
            links: [
                {
                    name: 'Dashboard',
                    links: '/dashboard'
                },
                {
                    name: 'My Favorite',
                    links: '/favorite'
                },
                {
                    name: 'My Profile',
                    links: '/profile'
                },
                {
                    name: 'Change Password',
                    links: '/password'
                },
            ]
        },
    ]
    return (
        <div className='bg-dry py-4 border:t-2 border-black '>
            <div className='container mx-auto px-2'>
                <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                    {Links.map((link, index) => (
                        <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                            <h3 className='text-md lg:leading-7 font-medium lg:mb-6 mb-4 pb-0.5'>{link.title}</h3>
                            <ul className='text-sm flex flex-col space-y-3 '>
                                {link.links.map((text, index) => (
                                    <li key={index} className='flex items-baseline'>
                                        <Link to={text.links} className="text-border inline-block w-full hover:text-subMain">
                                            {text.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                        <Link to='/'>
                            <img
                                src='/Images/Logonetflix.png'
                                className='w-2/4 h-12 object-contain'
                                alt='logo' />
                        </Link>
                        <p className='leadin-7 text-sm text-border mt-3'>
                            <span>
                                Jeff 916 jeune étudiant en informatique, 3 résidence bellevue, <br /> Longjumeau 91160, France
                            </span>
                            <br />
                        <span> Tel: +33 7 49 00 81 60</span>
                        <br />
                        <span> email: gbazialij@gmail.com</span>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer