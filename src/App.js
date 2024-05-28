import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage'
import fetchWeatherData from './apis/weatherdata';

function App() {

  const getWeather = async () => {
    const weatherData = await fetchWeatherData("weather", { q: "tokyo" });
    console.log(weatherData);
  };

  getWeather();

  return (
    <div className="h-screen bg-auto bg-no-repeat bg-custom-image">
      <div className="bg-sky-800 bg-opacity-20 h-screen">
        <div className="p-4 rounded-3xl">
          <Header />
        </div>
        <WelcomeMessage />
      </div>
    </div>
  );
}

export default App;
