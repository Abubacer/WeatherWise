import { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage';
import fetchFormattedWeatherData from './apis/weatherdata';
import InfoBox from './components/InfoBox';
import AboutSection from './components/AboutSection';

function App() {
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        let data;
        if (query.q) {
          data = await fetchFormattedWeatherData({ q: query.q, units });
        } else if (query.lat && query.lon) {
          data = await fetchFormattedWeatherData({ lat: query.lat, lon: query.lon, units });
        }

        //console.log('Weather data:', data);
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
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, [query, units]);

  useEffect(() => {
    if (showAbout && aboutRef.current && scrollToAbout) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToAbout(false); // Reset the flag
    }
  }, [showAbout, scrollToAbout]);


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

  const handleToggleAbout = () => {
    setShowAbout(!showAbout);
    setScrollToAbout(true);
  };

  return (
    <main className="flex flex-col p-4 backdrop-blur-lg">
      <div className="relative z-30 flex flex-col justify-between">
        <Header
          onLocationSearch={handleLocationSearch}
          onUnitChange={handleUnitChange}
          onGeolocation={handleGeolocation}
          onToggleInfoBox={handleToggleInfoBox}
          setShowWelcome={setShowWelcome}
        />
      </div>

      {showInfoBox && (
        <div className="z-50">
          <InfoBox />
        </div>
      )}

      {showWelcome ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <WelcomeMessage onToggleAbout={handleToggleAbout} />
          <AboutSection showAbout={showAbout} ref={aboutRef} />
        </div>
      ) : (
        weather && (
          <div className="relative z-20 mt-4">
            <MainContent weather={weather} units={units} />
          </div>
        )
      )}
      <ToastContainer autoClose={3000} position="bottom-right" style={{ width: "300px" }} />
    </main>
  );
}

export default App;
