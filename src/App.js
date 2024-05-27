import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import fetchWeatherData from './apis/weatherdata';

function App() {

  const getWeather = async () => {
    const weatherData = await fetchWeatherData("weather", { q: "tokyo" });
    console.log(weatherData);
  };

  getWeather();

  return (
    <div className="h-screen">
      <Header />
      <div className="">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
