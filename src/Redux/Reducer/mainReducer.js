
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
 data:[],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_FROM_STORAGE":
      return {
        ...state,
        data: action.payload? action.payload : [],
      };

    case "SET_DATA_TO_STORAGE":
      let feedsArr = [...state.data, action.payload];
      AsyncStorage.setItem('FEEDS', JSON.stringify(feedsArr))
      return {
        ...state,
        data:feedsArr,
      };

    default:
      return state;
  }
};

export default mainReducer;