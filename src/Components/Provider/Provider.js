import React from "react";
import { connect } from "react-redux";
import { updateProvider } from "../../store/actions";

const provider = props => {
  return (
    <div>
      <label htmlFor="provider">PROVIDER:</label>
      <input
        type="text"
        id="provider"
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
