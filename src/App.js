import styles from './App.module.css';
import CitySelectorContainer from './Components/CitySelector/CitySelector';
import WeatherInfoContainer from './Components/WeatherInfo/WeatherInfo';


function App(props) {
  return (
    <div className={styles.App}>
      <CitySelectorContainer />
      <WeatherInfoContainer />
    </div>
  )
}

export default App;
