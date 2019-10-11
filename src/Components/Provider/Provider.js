import React from "react";
import { connect } from "react-redux";
import { updateProvider } from "../../store/actions";
import "../GameId/GameId.scss";

const provider = props => {
  return (
    <div>
      <label>PROVIDER:</label>
      <input
        type="text"
        className="inputfield"
        placeholder="tpevents or adjust-callback"
        onChange={e => {
          props.updateProvider(e.target.value);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  updateProvider
};

export default connect(
  null,
  mapDispatchToProps
)(provider);
