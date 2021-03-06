import React from 'react';
import { connect } from 'react-redux';

import { Feedbacker } from 'components/Feedbacker';
import { SimpleBackdrop } from 'components/Backdrop';

import AuthenticatedAppTemplate from 'templates/AuthenticatedAppTemplate';
import UnAuthenticatedAppTemplate from 'templates/UnAuthenticatedAppTemplate';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';
import { actions as alertDataActions } from 'store/reducers/alertData';
import { actions as authActions } from 'store/sagas/auth/sagaActions';

export interface IAppProps {
  isUserAuthenticated?: boolean;
  alertData: IGlobalStore['alertData'];
  isLoading: IGlobalStore['isLoading'];
  setAlertData: typeof alertDataActions.setAlertData;
  checkAuthStatus: typeof authActions.checkAuthStatus;
}

const App: React.FC<IAppProps> = ({ 
  isUserAuthenticated, 
  alertData, 
  setAlertData, 
  checkAuthStatus, 
  isLoading
}) => {
  React.useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);
  
  const onClearFeedback = () => {
    setAlertData({ open: false });
  };
  
  return (
    <>
      {
        isUserAuthenticated
          ? <AuthenticatedAppTemplate />
          : <UnAuthenticatedAppTemplate />
      }
      <Feedbacker 
        open={alertData.open}
        severity={alertData?.severity}
        clearFeedback={onClearFeedback}
        feedbackMessage={alertData?.feedbackMessage || ''}
      />
      <SimpleBackdrop open={isLoading} />
    </>
  );
};

const mapStateToProps = (store: IGlobalStore) => ({
  isUserAuthenticated: store.isUserAuthenticated,
  alertData: store.alertData,
  isLoading: store.isLoading
});

const mapDispatchToProps = {
  setAlertData: alertDataActions.setAlertData,
  checkAuthStatus: authActions.checkAuthStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
