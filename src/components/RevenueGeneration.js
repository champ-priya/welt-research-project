import React from 'react';
import styled from 'styled-components';

const RevenueWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #e2e2e2;
  color: #333;
  text-align: center;
`;

const RevenueContent = styled.div`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
`;

const RevenueGeneration = () => {
  return (
    <RevenueWrapper id="revenue">
      <RevenueContent>
        <h2>Revenue Generation</h2>
        <p>Revenue generation strategies for Welt Research Pvt. Ltd. include IP commercialization, product development, contract research, consulting, grants and funding, partnerships, technology transfer, spin-offs, and crowdfunding.</p>
      </RevenueContent>
    </RevenueWrapper>
  );
};

export default RevenueGeneration;
