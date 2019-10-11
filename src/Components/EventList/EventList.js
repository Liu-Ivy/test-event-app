import React from "react";

function EventList(props) {
  console.log("list", props.list);
  return (
    <div>
      {props.list.map(item => {
        const { event_name, state_name, user_id } = item.record;
        {
          /* const { createdAt } = item; */
        }
        {
          /* const inOrder = item.sort((a, b) => a.createdAt > b.createdAt); */
        }
        return (
          <div>
            <p>
              Name:{event_name}
              {state_name}
            </p>
            <p>User Id:{user_id}</p>
            {/* <p>Created at:{inOrder}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
