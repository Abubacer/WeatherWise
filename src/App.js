import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
//import WelcomeMessage from './components/WelcomeMessage'
import fetchFormattedWeatherData from './apis/weatherdata';

function App() {

  const [query, setQuery] = useState({ q: "tokyo" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const searchParams = { q: 'ibiza', units: 'metric' };
      const data = await fetchFormattedWeatherData(searchParams);
      console.log('Weather Data:', data);
      setWeather(data);
    }

    getWeather();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-200 to-orange-100">
      <div className="backdrop-blur-sm bg-sky-800/10 h-screen">
        <div className="p-4 relative z-30">
          <Header />
        </div>
        {weather && (
          < div className="relative z-20">
            <MainContent weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
