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
      path: '#1',
    },
    {
      title: 'Teachers',
      icon: <CallMadeIcon />,
      path: '#2',
    },
    {
      title: 'Lessons',
      icon: <CallMadeIcon />,
      path: '#3',
    },
    {
      title: 'Schedule',
      icon: <CallMadeIcon />,
      path: '#4',
    },
  ];

  return (
    <Box>
      <Navbar
        showBurgerButton
        showLogoutButton
        showSidebar={setShowSidebar}
        isSidebarShown={showSidebar}
      />
      <Sidebar items={sidebarList} showSideBar={showSidebar} />
      <Box pt={12}>
        <AuthenticateRouter />
      </Box>
      <Footer />
    </Box>
  );
};

export default AuthenticatedAppTemplate;
