export const UPDATE_GAMEID = "UPDATE_GAMEID";
export const UPDATE_PROVIDER = "UPDATE_PROVIDER";
export const UPDATE_TPDID = "UPDATE_TPDID";

const InitialState = {
  gameId: "",
  provider: "",
  tpdid: ""
};

const eventReducer = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_GAMEID:
      return { ...state, gameId: action.payload };
    case UPDATE_PROVIDER:
      return { ...state, provider: action.payload };
    case UPDATE_TPDID:
      return { ...state, tpdid: action.payload };
    default:
      return state;
  }
};

export default eventReducer;
