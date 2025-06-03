import React from 'react';
import templeLogo from '../assets/logo.png';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Seva', href: '/Seva' },
    { name: 'Events', href: '/Events    ' },
    { name: 'Contact', href: '/Contact' },
];

const Header = () => {
    return (
        <header
            style={{ backgroundColor: '#800000', borderBottom: '4px solid #facc15' }}
        >
            <div className="mx-auto flex justify-between items-center py-3 px-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={templeLogo}
                        alt="Shri Venkatraman Dev, Kumta"
                        className="h-12 w-10 object-contain rounded-full"
                        href="./pages/Home"
                    />
                    <span className="text-xl font-bold text-white tracking-tight">
                        Shri Venkatraman Dev, Kumta
                    </span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white font-medium hover:text-yellow-300 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;