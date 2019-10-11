import React from "react";
import { connect } from "react-redux";
import { updateTpdid } from "../../store/actions";

const TpdId = props => {
  return (
    <div>
      <label>TPD ID:</label>
      <input
        type="text"
        className="inputfield"
        placeholder="ex:c0000000000"
        onChange={e => {
          props.updateTpdid(e.target.value);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  updateTpdid
};

export default connect(
  null,
  mapDispatchToProps
)(TpdId);
