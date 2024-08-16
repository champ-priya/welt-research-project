import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background-color: #3a3a3a;
  color: white;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: auto;
  p {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>&copy; 2024 Welt Research Pvt. Ltd. All rights reserved.</p>
        <p>Contact us: info@weltresearch.com</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
