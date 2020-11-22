import React from 'react';
import { Box } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';

import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { Sidebar, ISidebarListItem } from 'components/Sidebar';

import AuthenticateRouter from 'routers/AuthenticateRouter';

const AuthenticatedAppTemplate: React.FC = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const sidebarList: ISidebarListItem[] = [
    {
      title: 'Students',
      icon: <CallMadeIcon />,
      path: '#',
    },
    {
      title: 'Teachers',
      icon: <CallMadeIcon />,
      path: '#',
    },
    {
      title: 'Lessons',
      icon: <CallMadeIcon />,
      path: '#',
    },
    {
      title: 'Schedule',
      icon: <CallMadeIcon />,
      path: '#',
    },
  ];

  return (
    <Box>
      <Navbar
        showBurgerButton
        showSidebar={setShowSidebar}
        isSidebarShown={showSidebar}
      />
      <Sidebar items={sidebarList} showSideBar={showSidebar} />
      <AuthenticateRouter />
      <Footer />
    </Box>
  );
};

export default AuthenticatedAppTemplate;
