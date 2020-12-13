import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { Sidebar } from 'components/Sidebar';

import { IGlobalStore } from 'types/interfaces/IGlobalStore';
import { UserRole } from 'types/enums/userRole';
import AuthenticateRouter from 'routers/AuthenticateRouter';

import { adminSideBarList, studentSideBarList, teacherSideBarList } from './sidebarLists';

export interface IAuthenticatedAppTemplateProps {
  role?: UserRole;
}

const AuthenticatedAppTemplate: React.FC<IAuthenticatedAppTemplateProps> = ({ role }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  console.info(role)
  const sidebarList = role === UserRole.Student 
    ? studentSideBarList
    : role === UserRole.Teacher
    ? teacherSideBarList
    : adminSideBarList;

  return (
    <Box>
      <Navbar
        showBurgerButton
        showLogoutButton
        showSidebar={setShowSidebar}
        isSidebarShown={showSidebar}
      />
      <Sidebar items={sidebarList} showSideBar={showSidebar} />
      <Box pt={12} pb={12}>
        <AuthenticateRouter />
      </Box>
      <Footer />
    </Box>
  );
};

const mapStateToProps = (store: IGlobalStore) => ({
  role: store.userData.Role
});

export default connect(mapStateToProps)(AuthenticatedAppTemplate);
