import { useEffect, useState } from 'react';
//import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage'
import fetchFormattedWeatherData from './apis/weatherdata';

function App() {

  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        let data;
        if (query.q) {
          data = await fetchFormattedWeatherData({ q: query.q, units });
        } else if (query.lat && query.lon) {
          data = await fetchFormattedWeatherData({ lat: query.lat, lon: query.lon, units });
        }
        if (data) {
          setWeather(data);
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    if (query.q || (query.lat && query.lon)) {
      getWeather();
    }
  }, [query, units]);

  const handleLocationSearch = (location) => {
    setQuery({ q: location });
    setShowWelcome(false);
  }

  const handleUnitChange = (unit) => {
    setUnits(unit);
  }

  const handleGeolocation = (coords) => {
    setQuery({ lat: coords.lat, lon: coords.lon });
    setShowWelcome(false);
  }

  return (
    <div className="h-screen bg-cover bg-gradient-to-br from-blue-400 to-orange-200">

      <div className="p-4 relative z-30">
        <Header onLocationSearch={handleLocationSearch} onUnitChange={handleUnitChange} onGeolocation={handleGeolocation} />
      </div>
      {showWelcome ? (
        <div className="flex flex-col items-center justify-center bg-transparent">
          <WelcomeMessage />
        </div>
      ) : (
        weather && (
          <div className="relative z-20 px-4 sm:pb-4 md:pb-4">
            <MainContent weather={weather} />
          </div>
        )
      )}
    </div>
  );
}

export default App;
