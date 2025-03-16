import React from 'react';
import { Link } from 'react-router-dom';

interface TopBarProps {
    title?: string;
}

const TopBar: React.FC<TopBarProps> = ({ title = 'Secure Your Digital Presence' }) => {
    return (
        <div className="w-full bg-gradient-to-r from-cyan-100 via-blue-200 to-blue-400 px-4 sm:px-8 py-6 flex items-center">
            {/* GFU Logo & Title in Flexbox */}
            <div className="flex items-center gap-x-4 w-full">
                <Link to="/">
                    <img src="/img/gf-blue-gold.png" alt="Logo" className="h-8 sm:h-16 w-auto" />
                </Link>
                <h2 className="text-2xl sm:text-5xl font-bold text-blue-900">{title}</h2>
            </div>
        </div>
    );
};

export default TopBar;
