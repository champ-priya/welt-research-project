import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #e2e2e2;
  color: #333;
  text-align: center;
`;

const ServicesContent = styled.div`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <ServicesContent>
        <h2>Our Services</h2>
        <p>Discover limitless possibilities with our research-driven solutions. From pioneering innovations to customized R&D services, we empower businesses to thrive in an ever-evolving landscape.</p>
        <p>We offer need-based product solutions, consultancy for technological and scientific research, product development, training, and advanced research for social and industrial needs.</p>
      </ServicesContent>
    </ServicesWrapper>
  );
};

export default Services;
