import React from 'react';
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons';

const Header = () => {
    return (
        <div className="bg-white p-4 flex items-center">
            <h1 className="text-lg text-gray-400 cursor-pointer hover:text-gray-400 transition ease-out mr-8">WeatherWise</h1>
            <button className="p-2 border border-gray-300 bg-gray-50 text-gray-800 rounded-3xl mr-2 hover:border-blue-400 hover:bg-blue-400 transition ease-out">
                <UilMapMarker size={22} className="text-gray-400 cursor-pointer hover:text-white" />
            </button>

            <div className="relative sm:w-full xl:w-1/3">
                <UilSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition ease-out hover:scale-125" />
                <input
                    type="text"
                    placeholder="Search new place"
                    className="w-full pl-10 p-2 border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none capitalize rounded-3xl"
                />
            </div>
        </div >
    );
};

export default Header;
