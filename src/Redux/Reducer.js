import { weatherAPI } from "../api/api"

const SET_CITY = 'SET_CITY'
const SET_WEATHER = 'SET_WEATHER'
const SET_MAP = 'SET_MAP'
const SET_FETCHING = 'SET_FETCHING'


let initState = {
    city: '',
    weather: null,
    map: null,
    isFetching: false
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CITY: {
            return {
                ...state,
                city: action.city
            }
        }
        case SET_WEATHER: {
            return {
                ...state,
                weather: action.weather
            }
        }
        case SET_MAP: {
            return {
                ...state,
                map: action.map
            }
        }
        case SET_FETCHING: {
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        default:
            return state
    }
}

export const setWeather = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}
export const setMap = (map) => {
    return {
        type: SET_MAP,
        map
    }
}

export const setGlobalCity = (city) => {
    return {
        type: SET_CITY,
        city
    }
}

export const setFetching = (fetching) => {
    return {
        type: SET_FETCHING,
        fetching
    }
}

export const getWeather = (city) => (dispatch) => {
    dispatch(setFetching(true));
    return weatherAPI.getWeather(city)
        .then(response => {
            dispatch(setWeather(response));
            dispatch(setFetching(false));
        });
}

export const getWeatherMap = (lat,lon) => (dispatch) => {
    return weatherAPI.getMap(lat,lon)
        .then(response => {
            dispatch(setMap(response));
        })
}

export default Reducer;