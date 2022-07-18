import React from 'react';
import { useLocation } from 'react-router-dom';

import HeaderCostumer from './HeaderCostumer';
import HeaderSeller from './HeaderSeller';

function Header() {
  const { pathname } = useLocation();

  const role = pathname.split('/')[1];

  if (role === 'seller') return <HeaderSeller />;
  return <HeaderCostumer />;
}

export default Header;
