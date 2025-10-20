import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-5'>
            <div></div>
            <div className='flex gap-5 text-accent ml-40 text-lg'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src={user} alt="" />
                <button to={'/login'} className='btn btn-primary px-5 py-2 font-semibold text-xl'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;