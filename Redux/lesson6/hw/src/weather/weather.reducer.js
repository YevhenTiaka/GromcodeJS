import { GET_DATA } from './weather.actions';

const initialState = {
  citiesData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        citiesData: action.payload.citiesData,
      };

    default:
      return state;
  }
};

export default weatherReducer;
