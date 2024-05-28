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
                setSuggestions(data);
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
        <div className="bg-white bg-opacity-90 p-4 flex items-center rounded-3xl">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-lg text-gray-400 cursor-pointer hover:text-blue-400 transition ease-out ml-2 mr-4">WeatherWise</h1>

            <button className="p-2 border border-gray-300 bg-gray-50 text-gray-800 rounded-3xl mr-2 hover:border-blue-400 hover:bg-blue-400 transition ease-out" onClick={handleGeolocation}>
                <UilMapMarker size={22} className="text-gray-400 cursor-pointer hover:text-white" />
            </button>

            <div className="relative sm:w-full xl:w-1/3">
                <UilSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition ease-out hover:scale-125" />
                <input
                    type="text"
                    placeholder="Search new place"
                    className="w-full pl-10 p-2 border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none capitalize rounded-3xl"
                    value={location}
                    onChange={handleLocationChange}
                />
                {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute z-10 mt-1 bg-white bg-opacity-85 border border-gray-300 rounded-xl shadow-lg">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} className="px-4 py-2 border-b cursor-pointer font-medium hover:bg-blue-400 hover:text-white" onClick={() => handleSelectLocation(suggestion)}>
                                {suggestion.display_name}
                            </li>
                        ))}
                    </ul>
                )}
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
