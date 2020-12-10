import { FeedbackerSeverity } from 'components/Feedbacker';
import { IUserPartialData } from '../entities/user/IUserData';

export interface IGlobalStore {
  userData: IUserPartialData;
  isUserAuthenticated?: boolean;
  alertData: {
    open: boolean;
    severity?: FeedbackerSeverity;
    feedbackMessage?: string;
  };
  isLoading: boolean;
}
