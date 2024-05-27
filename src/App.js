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
    <div className="h-screen bg-blue-50">
      <div className="p-4 rounded-3xl">
        <Header />
      </div>
      <div className="">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
