import { LocalStoreService } from 'services/LocalStoreService';
import { ACCESS_TOKEN } from 'constants/localStoreKeys';

export const getBerearToken = () => {
  return `Berear ${LocalStoreService.getInstance().get(ACCESS_TOKEN)}`;
};
