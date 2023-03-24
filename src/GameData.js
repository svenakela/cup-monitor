import React from 'react';
import styled from 'styled-components';

const Container = styled.article``;

export default ({ isoTime }) => 
  <Container className="game-item">
    <div className="game-details-container">
      <div className="game-details">
        {new Date(isoTime).toLocaleString("sv-SE", {timeStyle:"short"})}
      </div>
    </div>
  </Container>;
