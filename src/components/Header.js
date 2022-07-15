import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Header = () => {
  const [active, setActive] = useState('user');

  return (
    <header>
      <Menu pointing secondary as="nav">
        <Container>
          <Menu.Item
            name="user"
            onClick={() => setActive('user')}
            active={active === 'user'}
            as="span"
          >
            <Link to="/">User</Link>
          </Menu.Item>
          <Menu.Item
            name="child"
            onClick={() => setActive('child')}
            active={active === 'child'}
            as="span"
          >
            <Link to="/child">Child</Link>
          </Menu.Item>
        </Container>
      </Menu>
    </header>
  );
};

export default Header;
