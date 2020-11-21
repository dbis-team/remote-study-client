import React from 'react';
import { connect } from 'react-redux';

import AuthenticatedAppTemplate from 'templates/AuthenticatedAppTemplate';
import UnAuthenticatedAppTemplate from 'templates/UnAuthenticatedAppTemplate';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';

export interface IAppProps {
  isUserAuthenticated?: boolean;
}

const App: React.FC<IAppProps> = ({ isUserAuthenticated }) => (isUserAuthenticated
  ? <AuthenticatedAppTemplate />
  : <UnAuthenticatedAppTemplate />);

const mapStateToProps = (store: IGlobalStore): IAppProps => ({
  isUserAuthenticated: store.isUserAuthenticated,
});

export default connect(mapStateToProps)(App);
