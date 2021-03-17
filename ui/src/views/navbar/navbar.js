import React from 'react';

const Navbar = () => {
    const NavItem = ({ name }) => <div>{name}</div>;

    return (
        <div
            className={
                'w-full px-4 h-16 bg-green-400 flex justify-between items-center cursor-pointer'
            }>
            <div>
                <a href={'/'}>
                    <h3 className={'text-2xl'}>Matprat</h3>
                </a>
            </div>
            <NavItem name={'Settings'} />
        </div>
    );
};

export default Navbar;
