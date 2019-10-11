import React, { useState } from "react";
import axios from "axios";
import GameId from "../GameId/GameId";
import TpdId from "../TpdId/TpdId";
import Provider from "../Provider/Provider";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import "./Home.scss";

function Home({ gameId, provider, tpdid }) {
  const [eventList, setEventList] = useState([]);
  const handleAllSearch = () => {
    axios
      .get(
        `http://react-test-backend.us-east-1.elasticbeanstalk.com/analytics-events?gameId=${gameId}&provider=${provider}&tpdid=${tpdid}`
      )
      .then(response => {
        const list = response.data && response.data.data;
        setEventList(list || []);
      })
      .catch(err => {});
  };

  const isValid = () => gameId && provider && tpdid;
  return (
    <>
      <h1 className="title">Test-Event</h1>
      <div className="form">
        <GameId></GameId>
        <Provider></Provider>
        <TpdId></TpdId>
        <button
          className="button"
          disabled={!isValid()}
          onClick={handleAllSearch}
        >
          Submit
        </button>
      </div>
      <EventList list={eventList} />
    </>
  );
}

const mapStateToProps = store => ({
  gameId: store.gameId,
  provider: store.provider,
  tpdid: store.tpdid
});

export default connect(mapStateToProps)(Home);
