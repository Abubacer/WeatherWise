<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/Abubacer/weatherwise/blob/main/Weatherwise.png" alt="IMG" 
  </a>

<h1 align="center"></h1>
<div align="left">
<br />


# WeatherWise App

WeatherWise is a React-based weather application that allows users to view current weather conditions and forecasts for a specified location. Users can search for a location, use geolocation to fetch their current weather, and switch between Celsius and Fahrenheit temperature units. The application provides an intuitive user interface with smooth transitions and helpful recommendations based on the weather.

The project has been a journey marked by significant milestones and learning experiences. From integrating multiple external APIs to building a responsive and user-friendly interface using React and Tailwind CSS, during the project limited time(13 days) I successfully navigated numerous technical challenges. 

The deprecation of the One Call 2.5 API and the subsequent shift to a paid service required quick adaptation and exploration of alternative solutions. Despite the frequent crashes of VS Code’s remote SSH connection, which impacted productivity, the project progressed steadily through effective problem-solving and resilience.

## Learning objectives

  - Dynamic Full-stack Applications Development: Gain practical experience in developing full-stack dynamic web applications from concept to deployment. Apply my acquired skills and knowledge gained as a software engineering student to build robust and scalable applications.
  - API Integration & Data Visualization: Explore the integration of APIs  to provide real-time data, and explore techniques to present data in a user-friendly and visually appealing manner on the frontend, and ensuring easy comprehension and engagement for end users.
  - Frontend Development and UX Design: Hone my frontend development skills and delve into the world of UI/UX design. Learn how to create captivating user experiences through innovative design elements, responsive layouts, and engaging interactive features. Strive to deliver intuitive interfaces that optimize user satisfaction and usability.


## Table of Contents

1. [Features](#Features)
2. [Technologies Used](#Technologies-Used)
3. [Getting Started](#Getting-started)
4. [Usage](#Usage)
5. [App Components](#App-Components)
6. [API Integration](#API-Integration)
7. [Areas for Improvement](#Areas-for-Improvement)
8. [Next Steps](#Next-Steps)
9. [License](#License)


## Features

  - Current weather and forcast weather: get current and forcast weather information.
  - Location Search Autocomplete: Search for weather information with auto-complete suggestions.
  - Geolocation: Fetch weather data for the user's current location.
  - Unit Switch: Toggle between Celsius and Fahrenheit units.
  - Welcome Message: Display a welcome message initially and transition to the main content upon user interaction.
  - Weather Recommendations: Provide clothing and activity recommendations based on the current weather.
  - Responsive and Modern UI Design: Enjoy a user-friendly, responsive interface that works well on all devices. 

## Technologies Used

  - React: Used for building a dynamic and interactive user interface with  immersive and captivating user experience.
  - TailwindCSS: Used  to create a responsive and mobile-first visually appealing and user friendly interface.
  - Node JS:  Used for development as a cross-platform JavaScript runtime environment.
  - Luxon JS:  Used as a modern, and powerful wrapper for JavaScript dates and times
  - Git/Github : Used for version control.
  - LocationIQ:  is a powerful geocoding and location data service that enables us to retrieve accurate location information based on user input. The integration will allow fetching precise weather data for the user's specified location and streamline location input with autocomplete functionality.
  - OpenWeatherMap: is a reliable and scalable weather API  that allows us to fetch current and future weather data.  The integration will  keep users informed about real-time weather.
  - React Unicons and custom weather animated icons: React Unicons is a collection of icons designed by IconScout.

## Getting started
### Prerequisites
  - Node.js (v14 or higher)
  - npm (v6 or higher) or yarn (v1 or higher)

### Installation

1. Clone the repository:
```
git clone https://github.com/Abubacer/weatherwise.git
cd weatherwise
```

In the project directory, you can run:

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Set up environment variables:

```
# get your API key from openweathermap website
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
```

4. Start the development server:

- Runs the app in the development mode.\
```
npm start
# or
yarn start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- The page will reload when you make changes.\

4. Build the app for production:

```
npm run build
```
- Builds the app for production to the `build` folder.\
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.\
- The app is ready to be deployed!
- See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

5. Learn More
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Usage
1. Search for a location: Enter a location in the search bar and select from the suggestions or use geolocation by clicking the geolocation button to fetch weather data for your current location.
2. Switch temperature units: Click the Celsius or Fahrenheit buttons to toggle between units.
3. Enjoy!

## App components
### App.js
  - Manages state for the application including query, units, weather data, and visibility of the welcome message.
  - Fetches weather data based on user input or geolocation.
  - Renders the Header, WelcomeMessage, and MainContent components.
### Header.js
  - Contains the search bar, geolocation button, and unit switch buttons.
  - Handles user input for location search and geolocation.
  - Triggers the fetching of weather data and unit switching.
### MainContent.js
  - Displays current weather information and forecasts.
  - Provides recommendations based on the weather.
  - Formats and presents weather data in a user-friendly layout.
### WelcomeMessage.js
  - Displays a welcome message to the user when they first open the application.
  - Transitions to the main content when the user searches for a location or uses geolocation.
### weatherapi.js
  - Contains functions to fetch weather data from the OpenWeatherMap API.
  - Formats the fetched data for use within the application.

## API Integration
The application uses the OpenWeatherMap API to fetch weather data, and locationiq for location auto-complete suggestions. Ensure you have a valid API key and set it in the .env file as described in the Installation section.

  - Current Weather Data: Fetches current weather information for a specified location.
  - Forecast Data: Fetches weather forecast data for the next few hours.
  - Location search auto-complete: Shows a list of locations suggestions.

## Areas for Improvement
  - Improve the UI components, and add more detailed weather data analytics, and recommendations.
  - Optimize performance by reducing unnecessary re-renders and API calls.
  - Enhance the UI/UX with more interactive elements and animations. And implement push notifications and alerts.

## Next Steps
  - Transition to an open source and more robust weather API if necessary.
  - Refactor the code base and implement unit tests to ensure reliability
  - Add more features and optimize the performance.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
