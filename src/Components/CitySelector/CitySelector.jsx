import React, { useState } from 'react';
import { setGlobalCity } from '../../Redux/Reducer';
import { getWeather } from '../../Redux/Reducer';
import { connect } from 'react-redux';
import styles from './CitySelector.module.css'
import Loader from '../Loader/Loader';
const CitySelector = (props) => {

    const [city, setCity] = useState(props.city);

    const setGC = () => { // Отправляем город в state и делаем запрос к weatherAPI
        props.setGlobalCity(city);
        props.getWeather(city);
    }

    return (
        <div className={styles.window}>
            <span>
                <input className={styles.input} placeholder="Select city" value={city} onChange={(e) => setCity(e.currentTarget.value)}></input>
            </span>
            <span>
                <button className={styles.button} onClick={setGC}>
                    {
                        props.isFetching
                        ? <Loader />
                        : <Loader />
                    }
                    </button>
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.city,
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = {
    setGlobalCity,
    getWeather,
}

const CitySelectorContainer = connect(mapStateToProps,mapDispatchToProps)(CitySelector);

export default CitySelectorContainer;