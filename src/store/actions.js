import { UPDATE_GAMEID } from "./reducer";
import { UPDATE_PROVIDER } from "./reducer";
import { UPDATE_TPDID } from "./reducer";

export function updateGameId(payload = "") {
  return dispatch => {
    dispatch({ type: UPDATE_GAMEID, payload });
  };
}

export function updateProvider(payload = "") {
  return dispatch => {
    dispatch({ type: UPDATE_PROVIDER, payload });
  };
}

export function updateTpdid(payload = "") {
  return dispatch => {
    dispatch({ type: UPDATE_TPDID, payload });
  };
}
