import "./App.scss";
import WeatherToDay from "./components/WeatherToDay/WeatherToDay";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <WeatherToDay />
          <Slider />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
