import "./App.scss";
import WeatherToDay from "./components/WeatherToDay/WeatherToDay";
import Slider from "./components/Slider/Slider";
import SityAndInfo from "./components/CityAndInfo/CityAndInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <WeatherToDay />
          <Slider />
        </div>
        <div className="right">
          <SityAndInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
