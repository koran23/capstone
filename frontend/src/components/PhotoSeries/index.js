import React from "react";
import styled from 'styled-components';

const Series = styled.div`
.trending-panel {
    display: flex;
    /* position: relative; */
justify-content: center;
  width: 100vw;
  height: 600px;
  /* margin: 10px 15px; */
  background-color: rgba(247, 249, 250);
  border-radius: 15px;
}

.trending-header {
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  border-bottom: 1px solid rgb(235, 238, 240);
  font-size: 18px;
  font-weight: 750;
}

.trending-players-list {
  list-style: none;
  padding-left: 0px;
  height: 510px;
  margin: 0px;
  box-sizing: border-box;
  cursor: pointer;
}

.trending-footer {
  height: 45px;
}
`

export default function PhotoSeries() {
  return (
    <Series>
      <div className="trending-panel">
        <div className="trending-header">Photo Series</div>
        <ul className="trending-players-list">
          {/* {trendingPlayers &&
            trendingPlayers.map((player) => {
              return <TrendingPlayerCard key={player.id} player={player} />;
            })} */}
        </ul>
        <div className="trending-footer"></div>
      </div>
    </Series>
  );
}
