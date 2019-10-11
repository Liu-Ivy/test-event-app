import React from "react";
import { connect } from "react-redux";
import { updateGameId } from "../../store/actions";
import "./GameId.scss";

const gameId = props => {
  return (
    <div>
      <label>GAME ID:</label>
      <input
        type="text"
        className="inputfield"
        placeholder="warhammer or photofinish"
        onChange={e => {
          props.updateGameId(e.target.value);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  updateGameId
};

export default connect(
  null,
  mapDispatchToProps
)(gameId);
