import fetchWeatherData from './weather.gateway';

export const GET_DATA = 'WEATHER/GET_DATA';

const setWeatherData = citiesData => ({
  type: GET_DATA,
  payload: {
    citiesData,
  },
});

export const getWeatherData = () =>
  function (dispatch, getState) {
    fetchWeatherData().then(data => {
      dispatch(setWeatherData(data));
    });
  };
