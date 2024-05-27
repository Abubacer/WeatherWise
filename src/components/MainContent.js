import React from 'react';

function MainContent() {
    return (
        <div className="flex-1 bg-blue-50 p-4 flex flex-col">
            <div className="flex flex-grow flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4">
                <div className="flex-2 bg-white bg-opacity-90 p-6 rounded-3xl">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-start">
                            <h2 className="text-gray-700">Berlin | DE</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-gray-600">24 Dec 2024 18:26 PM</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-16">
                        <p className="text-3xl text-gray-800">Cloudy</p>
                        <img src="./partly-cloudy-day1.svg" alt="" className="w-40" />
                        <p className="text-4xl text-gray-800">32°</p>
                        <p className="text-gray-600">Feels Like: 28°</p>
                        <p className="text-gray-600">H: 32° | L: 24°</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainContent;
