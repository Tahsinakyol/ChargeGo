const INITIAL_STATE = {
  globalCar: "register",
  globalCharge: "start",
  thema: "dark",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GLOBALCAR":
      return { ...state, globalCar: action.payload };
    case "SET_GLOBALCHARGE":
      return { ...state, globalCharge: action.payload };
    case "SET_THEMA":
      return { ...state, thema: action.payload };

    default:
      return state;
  }
};
