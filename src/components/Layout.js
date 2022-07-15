import React from 'react';
import { Container } from 'semantic-ui-react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <Container className="layout">{children}</Container>
      <Footer />
    </main>
  );
}

export default Layout;
