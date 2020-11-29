import React from 'react';
import { connect } from 'react-redux';

import { Feedbacker } from 'components/Feedbacker';

import AuthenticatedAppTemplate from 'templates/AuthenticatedAppTemplate';
import UnAuthenticatedAppTemplate from 'templates/UnAuthenticatedAppTemplate';
import { IGlobalStore } from 'types/interfaces/IGlobalStore';
import { actions as alertDataActions } from 'store/reducers/alertData';

export interface IAppProps {
  isUserAuthenticated?: boolean;
  alertData: IGlobalStore['alertData'];
  setAlertData: typeof alertDataActions.setAlertData;
}

const App: React.FC<IAppProps> = ({ isUserAuthenticated, alertData, setAlertData }) => {
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
    </>
  );
};

const mapStateToProps = (store: IGlobalStore) => ({
  isUserAuthenticated: store.isUserAuthenticated,
  alertData: store.alertData,
});

const mapDispatchToProps = {
  setAlertData: alertDataActions.setAlertData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
