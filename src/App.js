import { useEffect, useState } from 'react';
import './App.css';
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
    if (query.q) {
      const getWeather = async () => {
        const data = await fetchFormattedWeatherData({ ...query, units });
        setWeather(data);
      }
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

  const handleGeolocation = (location) => {
    setQuery({ q: location });
    setShowWelcome(false);
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-300 to-orange-100">
      <div className="backdrop-blur-sm bg-sky-800/20 h-screen">
        <div className="p-4 relative z-30">
          <Header onLocationSearch={handleLocationSearch} onUnitChange={handleUnitChange} onGeolocation={handleGeolocation} />
        </div>
        {showWelcome ? (
          <WelcomeMessage />
        ) : (
          weather && (
            <div className="relative z-20">
              <MainContent weather={weather} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
