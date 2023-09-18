import { connect } from "react-redux";
import styles from './WeatherInfo.module.css'
import { HandySvg } from 'handy-svg';

import sun from './../../icon/day.svg'
import moon from './../../icon/night.svg'
import cloudy_sun from './../../icon/cloudy-day-1.svg'
import cloudy_moon from './../../icon/cloudy-night-1.svg'
import cloud from './../../icon/cloudy.svg'
import rain_sun from './../../icon/rain_with_sun.svg'
import rain from './../../icon/rain.svg'
import thunder from './../../icon/thunder.svg'
import snow from './../../icon/snow.svg'
import snow_sun from './../../icon/snow_with_sun.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureArrowUp, faTemperatureArrowDown, faWind, faDroplet, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'

const WeatherInfo = (props) => {

    let setIcon = (iconId) => { // Функция выбора иконки

        switch (iconId) {
            //Солнце
            case "01d":
                return sun
            //Луна
            case "01n":
                return moon
            case "02d":
                return cloudy_sun
            case "02n":
                return cloudy_moon
            //Облачно
            case "03d":
                return cloud
            case "03n":
                return cloud
            case "04d":
                return cloud
            case "04n":
                return cloud
            //Дождь
            case "09d":
                return rain
            case "09n":
                return rain
            case "10d":
                return rain_sun
            case "10n":
                return rain
            //Молния
            case "11d":
                return thunder
            case "11n":
                return thunder
            //Снег
            case "13d":
                return snow_sun
            case "13n":
                return snow
            //Туман
            case "50d":
                return cloud
            case "50n":
                return cloud

            default:
                return sun
        }
    }

    return (
        <div className={styles.window}>
            {props.weather ?
                <div>
                    <h1 className={styles.degree}>{Math.round(props.weather.main.temp)}</h1>
                    <HandySvg src={setIcon(props.weather.weather[0].icon)}  width='64' height='64'  className={styles.icon} />
                    <p className={styles.label}>{props.weather.weather[0].main}</p>
                    <hr size="2" color="white" className={styles.line}></hr>
                    <div className={styles.addInfo}>
                        <p>Feels like: {Math.round(props.weather.main.feels_like)}°</p>
                        <FontAwesomeIcon icon={faTemperatureArrowUp} />
                        <span>  {Math.round(props.weather.main.temp_max)}°</span>
                        <p></p>
                        <FontAwesomeIcon icon={faTemperatureArrowDown} />
                        <span>  {Math.round(props.weather.main.temp_min)}°</span>
                        <p></p>
                        <FontAwesomeIcon icon={faWind} />
                        <span> {props.weather.wind.speed} mps</span>
                        <p></p>
                        <FontAwesomeIcon icon={faDroplet} />
                        <span> {props.weather.main.humidity} %</span>
                        <p></p>
                        <FontAwesomeIcon icon={faGaugeHigh} />
                        <span>  {props.weather.main.pressure} hPa</span>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    }
}

const WeatherInfoContainer = connect(mapStateToProps)(WeatherInfo);

export default WeatherInfoContainer;