import { useState } from 'react';

const WelcomeMessage = ({ onToggleAbout }) => {

    const [showAbout, setShowAbout] = useState(false);
    const [btnLabel, setBtnLabel] = useState('');

    const handleToggleAbout = () => {
        setBtnLabel(btnLabel)
        //console.log('Before toggle:', showAbout);
        setShowAbout(!showAbout);
        //console.log('After toggle:', !showAbout);
        onToggleAbout(!showAbout);
    };

    return (
        <div className="" id="welcomemessage" >
            <div className=' flex flex-col items-center p-10 text-white bg-transparent text-center drop-shadow-sm' data-aos="fade" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-40 h-40 p-2" data-aos="zoom-in" data-aos-delay="500">
                    <g>
                        <path fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21" />
                        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate" />
                    </g>
                </svg>
                <h1 className="text-3xl md:text-5xl" data-aos="fade-down" data-aos-delay="500">Welcome to WeatherWise</h1>
                <hr className="border-2 w-40 my-4" />
                <p className="text-lg md:text-3xl max-w-4xl" data-aos="fade-up" data-aos-delay="500">To start, enter your location in the search bar or simply click the geolocation button</p>

                <div className="p-2 flex flex-row text-gray-400 font-medium border border-gray-50 bg-background rounded-full mt-6 hover:border-primary cursor-pointer hover:bg-primary hover:text-white transition ease-out" data-aos="fade-up" data-aos-delay="500">
                    <div className="relative">
                        <button
                            className="px-3"
                            onClick={handleToggleAbout}
                        >
                            {showAbout ? 'Hide Details' : 'Learn More'}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WelcomeMessage;
