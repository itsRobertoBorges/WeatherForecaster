import './App.css';
import WeatherCard from './Components/WeatherCard'
import Footer from'./Components/Footer'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
