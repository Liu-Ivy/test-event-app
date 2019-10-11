import React from "react";
import { connect } from "react-redux";
import { updateGameId } from "../../store/actions";

const gameId = props => {
  return (
    <div>
      <label htmlFor="game-id">GAME ID:</label>
      <input
        type="text"
        id="game-id"
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
