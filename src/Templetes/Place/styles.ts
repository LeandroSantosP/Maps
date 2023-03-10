import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 700px;
  background-color: #111;
  margin: 0 auto;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: var(--medium);
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid #fff;
  color: #fff;
`;

export const Content = styled.div`
  max-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    font-size: var(--small);
    margin-bottom: 1rem;
  }
`;

export const GalleryOfPictures = styled.section`
  display: grid;
  grid-gap: 2rem;
  height: 100%;
  margin-bottom: 2rem;
  gap: 3rem;
  border-radius: 0.4rem;

  img {
    border: 2px solid var(--highlight);
    width: 100%;
    background-color: #ccc;
    object-fit: cover;
    height: 100%;
    border-radius: 0.4rem;
  }
`;
