import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Icon
import { FaBarsStaggered, FaPassport, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // ToggleMenu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // NavItems
    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'Dashboard', path: '/admin/dashboard/upload' },
        { link: 'All Books', path: '/allBooks' },
        { link: 'About', path: '/about' },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                        <FaPassport className="inline-block" />Book.io
                    </Link>

                    {/* Nav items for lg */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path}>
                                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                                    {link}
                                </Link>
                            </Link>
                        ))}
                    </ul>
                     
                     {/* btn for large devices*/}
                     <div className='spax-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                     </div>

                     {/* menu btn for mobile devices*/}
                     <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black' />: <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                     </div>
                </div>


            {/* nav items for sm toggle */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 left-0 right-0 " :"hidden" }`}>
            {navItems.map(({ link, path }) => (
                            <Link key={path}>
                                <Link to={path} className="block text-base text-white uppercase cursor-pointer">
                                    {link}
                                </Link>
                            </Link>
                        ))}
</div>
            </nav>
        </header>
    );
};

export default Navbar;
