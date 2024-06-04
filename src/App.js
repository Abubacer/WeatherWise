import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage';
import fetchFormattedWeatherData from './apis/weatherdata';
import InfoBox from './components/InfoBox';

function App() {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showInfoBox, setShowInfoBox] = useState(false);

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
          toast("🎉 Hi! We've just snagged the latest weather forecast for you!");
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        toast.error("Sorry, failed to fetch weather data.");
      }
    };

    if (query.q || (query.lat && query.lon)) {
      getWeather();
    }
  }, [query, units]);

  const handleLocationSearch = (location) => {
    setQuery({ q: location });
    setShowWelcome(false);
  };

  const handleUnitChange = (unit) => {
    setUnits(unit);
  };

  const handleGeolocation = (coords) => {
    setQuery({ lat: coords.lat, lon: coords.lon });
    setShowWelcome(false);
    toast.info("Geolocation data fetched successfully!");
  };

  const handleToggleInfoBox = () => {
    setShowInfoBox(!showInfoBox);
  };

  return (
    <main className="flex flex-col p-4">
      <motion.div className="relative z-30 flex flex-col justify-between"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.9 }}
      >
        <Header onLocationSearch={handleLocationSearch} onUnitChange={handleUnitChange} onGeolocation={handleGeolocation} onToggleInfoBox={handleToggleInfoBox} />
      </motion.div>

      {showInfoBox && (
        <motion.div
          className="z-50"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <InfoBox />
        </motion.div>
      )}

      {showWelcome ? (
        <motion.div
          className="flex flex-col items-center justify-center bg-transparent mt-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeMessage />
        </motion.div>
      ) : (
        weather && (
          <motion.div
            className="relative z-20 mt-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.9 }}
          >
            <MainContent weather={weather} units={units} />
          </motion.div>
        )
      )}

      <div className="relative opacity-95 z-50">
        <ToastContainer autoClose={3000} position="top-right" />
      </div>
    </main>
  );
}

export default App;
