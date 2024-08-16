import React from 'react';
import styled from 'styled-components';

const AudienceWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f7f7;
  color: #333;
  text-align: center;
`;

const AudienceContent = styled.div`
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

const TargetAudience = () => {
  return (
    <AudienceWrapper id="audience">
      <AudienceContent>
        <h2>Target Audience</h2>
        <p>We identify specific industries or sectors that align with our expertise and capabilities to refine our target customer base and tailor marketing efforts effectively. These include technology companies, biotech and pharmaceutical firms, government agencies, universities, manufacturing companies, healthcare providers, environmental organizations, startups, and financial institutions.</p>
      </AudienceContent>
    </AudienceWrapper>
  );
};

export default TargetAudience;
