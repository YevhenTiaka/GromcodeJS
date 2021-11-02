import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherSelector } from './weather.selector';

const Weather = ({ weather, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weather.map(data => (
          <li key={data.id} className="city">
            <span className="city__name">{data.name}</span>
            <span className="city__temperature">{`${data.temperature}F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => ({
  weather: weatherSelector(state),
});

export default connect(mapStateToProps, weatherActions)(Weather);
