import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lqApiKey, LqBaseUrl } from '../apis/LocationiqApi';
import { UilMapMarker, UilSearch } from '@iconscout/react-unicons'
import logo from '../img/icon.png'

const Header = ({ onLocationSearch, onUnitChange, onGeolocation, onToggleInfoBox }) => {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [loadingToastId, setLoadingToastId] = useState(null);
    const [unit, setUnit] = useState('metric');

    const handleLocationChange = async (event) => {
        const value = event.target.value;
        setLocation(value);

        if (value.length >= 2) {
            try {
                const response = await fetch(`${LqBaseUrl}/autocomplete.php?key=${lqApiKey}&q=${value}&limit=4&format=json`);
                const data = await response.json();
                // console.log("resData", data);

                if (Array.isArray(data)) { // Check if data is an array
                    const formattedSuggestions = data.map((item) => {
                        const city = item.address.name || item.address.city || item.address.town || item.address.village;
                        const country = item.address.country;
                        return { display_name: `${city}, ${country}`, raw: item };
                    });

                    setSuggestions(formattedSuggestions);
                    setShowSuggestions(true);
                } else {
                    console.error('Data is not an array:', data);
                }
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
        onLocationSearch(suggestion.display_name);
        // console.log('Selected location:', suggestion);
    };

    const handleGeolocation = () => {
        if (navigator.geolocation) {
            setLoadingToastId(toast.info("Loading...", {
                autoClose: true,
            }));
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`${LqBaseUrl}/reverse.php?key=${lqApiKey}&lat=${latitude}&lon=${longitude}&format=json`);
                        const data = await response.json();
                        console.log('Reverse geocoding data:', data);
                        const city = data.address.city;
                        const country = data.address.country;
                        const formattedLocation = `${city}, ${country}`;
                        setLocation(formattedLocation);
                        setShowSuggestions(false); // Hide suggestion list when location is obtained
                        onGeolocation({ lat: latitude, lon: longitude });
                    } catch (error) {
                        console.error('Error fetching reverse geocoding:', error);
                    } finally {
                        toast.dismiss(loadingToastId);
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

    const handleUnitSwitch = () => {
        const newUnit = unit === 'metric' ? 'imperial' : 'metric';
        setUnit(newUnit);
        onUnitChange(newUnit);
    };


    const handleWeatherWiseClick = () => {
        onToggleInfoBox();
    };


    return (
        <div className="p-3 flex-col rounded-3xl backdrop-blur-md bg-background/75" data-aos="fade-down">
            <div className="flex flex-row items-center w-full xl:w-1/2 relative" data-aos="fade" data-aos-delay="500">
                <img src={logo} alt="logo" className="w-10 mr-2" />
                <h1
                    className="text-lg hidden lg:block text-gray-400 shadow-sm cursor-pointer hover:text-primary font-medium transition ease-out shadow-sm mr-6"
                    onClick={handleWeatherWiseClick}
                    data-tooltip-id="LogoBtnTooltip"
                >
                    WeatherWise
                </h1>
                <Tooltip id="LogoBtnTooltip" place="top" effect="solid">
                    About WeatherWise
                </Tooltip>

                <div className="flex flex-row border border-gray-300 bg-background rounded-full hover:border-primary hover:bg-primary transition ease-out" data-aos="fade" data-aos-delay="500">
                    <div className="relative">
                        <button
                            className="size-10 flex items-center text-xl font-medium justify-center text-gray-400 cursor-pointer hover:text-white transition ease-out"
                            data-tooltip-id="TempBtnTooltip"
                            onClick={handleUnitSwitch}
                        >
                            {unit === 'metric' ? 'C' : 'F'}

                        </button>
                        <Tooltip id="TempBtnTooltip" place="top" effect="solid">
                            Switch temperature units
                        </Tooltip>
                    </div>
                </div>


                <div className="flex flex-row border border-gray-300 bg-background rounded-full mx-2 hover:border-primary hover:bg-primary transition ease-out" data-aos="fade" data-aos-delay="500">
                    <div className="relative">
                        <button
                            className="size-10 flex items-center text-xl font-bold justify-center text-gray-400 cursor-pointer hover:text-white transition ease-out"
                            data-tooltip-id="GeoBtnTooltip" onClick={handleGeolocation}
                        >
                            <UilMapMarker />
                        </button>
                        <Tooltip id="GeoBtnTooltip" place="top" effect="solid">
                            Get current location
                        </Tooltip>
                    </div>
                </div>



                <div className="relative w-full" data-aos="fade" data-aos-delay="500">
                    <UilSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition ease-out hover:scale-125" />
                    <input
                        type="text"
                        placeholder="Search new place"
                        className="w-full pl-10 p-2 border border-gray-300 bg-background text-textPrimary focus:outline-none capitalize rounded-3xl"
                        value={location}
                        onChange={handleLocationChange}
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="absolute z-50 mt-1 w-full backdrop-blur-md bg-background/80 border border-gray-300 rounded-xl shadow-md divide-y">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} className="px-4 py-2 cursor-pointer font-medium hover:bg-primary hover:text-white rounded-xl" onClick={() => handleSelectLocation(suggestion.raw)}>
                                    {suggestion.display_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
