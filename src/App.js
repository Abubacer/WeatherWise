import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import WelcomeMessage from './components/WelcomeMessage'
//import fetchFormatedWeatherData from './apis/weatherdata';

function App() {

  /*const getWeather = async () => {
    const weatherData = await fetchFormatedWeatherData({ q: "tokyo" });
    console.log(weatherData);
  };

  getWeather();*/

  return (
    <div className="h-screen bg-gradient-to-br from-blue-200 to-orange-100">
      <div className="backdrop-blur-sm bg-sky-800/10 h-screen">
        <div className="p-4 relative z-30">
          <Header />
        </div>
        <div className="relative z-20">
          <WelcomeMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
