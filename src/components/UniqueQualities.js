import React from 'react';
import styled from 'styled-components';

const QualitiesWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
`;

const QualitiesContent = styled.div`
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

const UniqueQualities = () => {
  return (
    <QualitiesWrapper id="qualities">
      <QualitiesContent>
        <h2>Unique Qualities</h2>
        <p>As a research and technology development organization, Welt Research Pvt Ltd possesses the following unique qualities: committed to cutting-edge research and innovative solutions, focused on timely and quality service delivery, diverse team providing multi-dimensional insights, and more.</p>
      </QualitiesContent>
    </QualitiesWrapper>
  );
};

export default UniqueQualities;
