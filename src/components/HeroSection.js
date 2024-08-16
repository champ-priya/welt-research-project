import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #a8e063, #56ab2f);
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>Empowering Innovation, Illuminating Solutions</h1>
        <p>Welcome to Welt Research, where tomorrow's breakthroughs are born today.</p>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
