import React from 'react';
import { useEffect } from 'react';
import { UilArrowCircleUp, UilPlus } from '@iconscout/react-unicons';
import { Tooltip } from 'react-tooltip';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = React.forwardRef(({ showAbout }, ref) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div ref={ref} className={`${showAbout ? 'block' : 'hidden'}`}>
            <div data-aos="fade-up" >
                <div className="p-12 bg-white w-full mt-20">
                    <div className="flex-row">
                        <hr className="border-1 border-gray-600 my-4" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 space-y-8 lg:space-y-0" >
                        <div className="flex flex-row w-full lg:w-1/4" data-aos="fade-right" data-aos-delay="200">
                            <h2 className="text-2xl md:text-3xl font-medium">Get personalized recommendations based on the forecast</h2>
                        </div>
                        <div className="flex flex-row w-full lg:w-1/4" data-aos="fade-right" data-aos-delay="300">
                            <div className="text-primary hover:text-gray-400 mr-4">
                                <UilPlus />
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-medium">Hourly precipitation outlook</h3>
                                <p>Get accurate hourly precipitation outlook.</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-full lg:w-1/4" data-aos="fade-right" data-aos-delay="400">
                            <div className="text-primary hover:text-gray-400 mr-4">
                                <UilPlus />
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-medium">Stay prepared for upcoming weather</h3>
                                <p>Get personalized and tailored recommendations based on the forecast.</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-full lg:w-1/4" data-aos="fade-right" data-aos-delay="500">
                            <div className="text-primary hover:text-gray-400 mr-4">
                                <UilPlus />
                            </div>
                            <div>
                                <h3 className="text-md md:text-lg font-medium">Weather forecast and more</h3>
                                <p>Get daily weather forecast and data like temperature, humidity, wind speed and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start p-12 bg-slate-100/65 w-full">
                    <h2 className="text-2xl md:text-3xl font-medium" data-aos="fade-right" data-aos-delay="500">About</h2>
                    <hr className="my-1 b-gray-200" />
                    <p className="text-2xl md:text-3xl text-justify my-4 font-light" data-aos="fade-left" data-aos-delay="600">I'm thrilled to have you here, As a software development student, I've created this application to showcase <b className="font-serif italic">the integration of technology with everyday experiences</b>. This weather app goes beyond the basics, providing not only accurate weather information but also <b className="font-serif italic">personalized recommendations based on the forecast</b>.</p>
                </div>

                <div className="p-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start md:items-center md:flex-row">
                        <div className="flex flex-col justify-start mb-6 lg:mb-0">
                            <h2 className="text-2xl md:text-3xl font-medium mr-0 md:mr-40" data-aos="fade-right" data-aos-delay="500">Main Features</h2>
                        </div>
                        <div className="flex-col items-start w-full lg:w-2/4" data-aos="fade-left" data-aos-delay="600">
                            <ul className="text-2xl md:text-3xl space-y-2 items-center font-light">
                                <li>Current Weather Conditions & Forecasts</li>
                                <hr className="border-1 border-gray-600 my-4" />
                                <li>Temperature Units: Celsius & Fahrenheit</li>
                                <hr className="border-1 border-gray-600 my-4" />
                                <li>Auto Geolocation & Smart Location Search</li>
                                <hr className="border-1 border-gray-600 my-4" />
                                <li>Helpful Weather-Based Recommendations</li>
                                <hr className="border-1 border-gray-600 my-4" />
                                <li>User-Friendly & Intuitive UI/UX Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border-1 border-gray-600 my-4" />
                <p className="text-sm my-6 text-center" >Crafted with passion and love by Aziz Belkharmoudi | &copy; 2024.</p>
                <a href="#welcomemessage" className="absolute bottom-2 right-20 flex items-center justify-center hover:text-primary" data-tooltip-id="BackToTop"><UilArrowCircleUp /></a>
                <Tooltip id="BackToTop" place="top" effect="solid">
                    Back to top
                </Tooltip>
            </div>
        </div>
    );
});

export default AboutSection;
