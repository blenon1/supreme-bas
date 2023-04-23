import React from 'react'
import { FaListAlt, FaUsers } from 'react-icons/fa'
import { RiMovie2Fill, RiLockPasswordLine } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BsFillGridFill } from 'react-icons/bs'

function SlideBar({ children }) {
    const SideLinks = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: BsFillGridFill,
        },
        {
            name: 'Movies List',
            link: '/movieslist',
            icon: FaListAlt, 
        },
        {
            name: 'Add MOvie',
            link: '/addmovie',
            icon: RiMovie2Fill,
        },
        {
            name: 'Categories',
            link: '/categories',
            icon: HiViewGridAdd,
        },
        {
            name: 'Favorites Movies',
            link: '/favorites',
            icon: FaUsers,
        },
        {
            name: 'Update Profile',
            link: '/profile',
            icon: FiSettings,
        },
        {
            name: 'Change Password',
            link: '/password',
            icon: RiLockPasswordLine,
        },
    ]
    
  return (
    <div>SlideBar</div>
  )
}

export default SlideBar