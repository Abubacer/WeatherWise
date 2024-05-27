import React from 'react';
import { UilMapMarker } from '@iconscout/react-unicons'

const Header = () => {
    return (
        <div className="bg-white p-4 flex items-center">
            <h1 className="text-lg text-gray-400 cursor-pointer hover:text-gray-400 transition ease-out mr-8">WeatherWise</h1>
            <button className="p-2 border border-gray-300 bg-gray-50 text-gray-800 rounded-3xl mr-2 hover:border-blue-400 hover:bg-blue-400 transition ease-out">
                <UilMapMarker size={22} className="text-gray-400 cursor-pointer hover:text-white" />
            </button>
        </div >
    );
};

export default Header;
