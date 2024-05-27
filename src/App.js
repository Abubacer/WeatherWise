import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
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
