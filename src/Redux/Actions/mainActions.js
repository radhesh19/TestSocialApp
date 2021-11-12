export function getDatafromStorage(payload) {
    const action = {
      type:"GET_DATA_FROM_STORAGE",
      payload
    };
    return action;
  }

  export function setDataToStorage(payload) {
    const action = {
      type:"SET_DATA_TO_STORAGE",
      payload
    };
    return action;
  }