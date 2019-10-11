import React from "react";
import "./EventList.scss";

function EventList(props) {
  return (
    <div className="list-form">
      {props.list.map(item => {
        const { event_name, state_name, user_id } = item.record;
        const { createdAt } = item;

        return (
          <div className="event-list">
            <p className="name">
              <p>Name:</p>
              <span>
                {event_name}
                {state_name}
              </span>
            </p>
            <p className="name">
              <p>User Id:</p>
              <span>{user_id}</span>
            </p>
            <p className="name">
              <p>Created at:</p>
              <span>{createdAt}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
