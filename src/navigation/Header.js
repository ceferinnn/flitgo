import React from 'react';
import HeaderModel1 from '../components/headers/HeaderModel1';
import HeaderDrawer from '../components/headers/HeaderDrawer';

const Header = ({ headerModel, title, button }) => {
  switch (headerModel) {
    case 'Model1':
      return <HeaderModel1 title={title} />;
    case 'Drawer':
      return <HeaderDrawer title={title} />;
    default:
      return null;
  }
};

export default Header;
