import React, { useState } from 'react';
import { UilMapMarker, UilSearch, UilCelsius, UilFahrenheit } from '@iconscout/react-unicons'
import logo from '../img/icon.png'

const Header = () => {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const handleLocationChange = async (event) => {
        const value = event.target.value;
        setLocation(value);

        if (value.length >= 2) {
            try {
                const response = await fetch(`https://api.locationiq.com/v1/autocomplete.php?key=pk.0f6191d99d66e14e04b55794832375bf&q=${value}&limit=3&format=json`);
                const data = await response.json();

                const formattedSuggestions = data.map((item) => {
                    const city = item.address.name || item.address.city;
                    const country = item.address.country;
                    return { display_name: `${city}, ${country}`, raw: item };
                });

                setSuggestions(formattedSuggestions);
                setShowSuggestions(true);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSelectLocation = (suggestion) => {
        setLocation(suggestion.display_name);
        setShowSuggestions(false);
        console.log('Selected location:', suggestion);
    };

    const handleGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://api.locationiq.com/v1/reverse.php?key=pk.0f6191d99d66e14e04b55794832375bf&lat=${latitude}&lon=${longitude}&format=json`);
                        const data = await response.json();
                        const city = data.address.city;
                        const country = data.address.country;
                        const formattedLocation = `${city}, ${country}`;
                        setLocation(formattedLocation);
                        setShowSuggestions(false); // Hide suggestion list when location is obtained
                    } catch (error) {
                        console.error('Error fetching reverse geocoding:', error);
                    }
                },
                (error) => {
                    console.error("Error getting geolocation:", error.message);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser");
        }
    };

    return (
        <div className="p-3 flex flex-row justify-between rounded-3xl backdrop-blur-sm bg-white/65">
            <div className="flex flex-row items-center md:w-1/2 sm:w-full relative">
                <img src={logo} alt="logo" className="w-10 mr-2 opacity-75" />
                <h1 className="text-lg md:visible sm:collapse text-slate-400 cursor-pointer hover:text-blue-400 font-bold transition ease-out">WeatherWise</h1>

                <button className="p-2 border border-gray-300 bg-gray-50 text-gray-800 rounded-3xl mr-2 ml-4 hover:border-blue-400 hover:bg-blue-400 transition ease-out bg-opacity-95" onClick={handleGeolocation}>
                    <UilMapMarker size={22} className="text-gray-400 cursor-pointer hover:text-white" />
                </button>

                <div className="relative w-full bg-opacity-95">
                    <UilSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition ease-out hover:scale-125" />
                    <input
                        type="text"
                        placeholder="Search new place"
                        className="w-full pl-10 p-2 border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none capitalize rounded-3xl"
                        value={location}
                        onChange={handleLocationChange}
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="absolute z-50 mt-1 w-full backdrop-blur-md bg-gray-50/80 border border-gray-300 rounded-xl shadow-md divide-y">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} className="px-4 py-2 cursor-pointer font-medium hover:bg-blue-400 hover:text-white rounded-xl" onClick={() => handleSelectLocation(suggestion)}>
                                    {suggestion.display_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex flex-row ml-2 p-2 border border-gray-300 bg-gray-50 text-gray-800 rounded-3xl">
                <button name="metric">
                    <UilCelsius size={20} className="text-gray-400 cursor-pointer hover:text-blue-400 transition ease-out" />
                </button>
                <p className="mx-2 text-gray-400">|</p>
                <button name="imperial">
                    <UilFahrenheit size={20} className="text-gray-400 cursor-pointer hover:text-blue-400 transition ease-out" />
                </button>
            </div>
        </div>
    );
};

export default Header;
