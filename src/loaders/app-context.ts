import * as React from 'react';
import { UserType, FeatureFlagsType, SettingsType } from 'src/api';
import { AlertType } from 'src/components';

interface IAppContextType {
  user: UserType;
  setUser: (user: UserType) => void;
  selectedRepo?: string;
  setRepo: (repo: string) => void;
  featureFlags: FeatureFlagsType;
  alerts?: AlertType[];
  setAlerts?: (alerts: AlertType[]) => void;
  settings: SettingsType;
}

export const AppContext = React.createContext<IAppContextType>(undefined);
