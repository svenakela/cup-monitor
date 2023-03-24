import React from 'react';
import styled from 'styled-components';

const Container = styled.article``;

export default ({ logo, name }) => 
  <Container className="game-item team-data">
    <div className="game-details-container">
      <div className="game-details logo">
        <img src={logo}/>
      </div>
      <div className="game-details">
        {name}
      </div>
    </div>
  </Container>;