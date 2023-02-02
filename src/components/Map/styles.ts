import styled from "styled-components";

export const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  .leaflet-container {
    background-color: #0b032d;
  }
`;

export const Filter = styled.input`
  position: absolute;
  top: 2rem;
  left: 5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  max-width: 200px;
  border: none;
  outline: none;
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
  z-index: 1100;
`;
