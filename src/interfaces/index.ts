export interface AlertsInterface {
  isActive: boolean;
  handleAlert: () => void;
}

export type FiltersType = Record<string, boolean>;

export interface PasswordType {
  id: string;
  password: string;
  strength: string;
  timestamp: string;
}

export interface HistoryStorageType {
  historyStorage: PasswordType[];
  addPassword: ({ password, strength, timestamp }: PasswordType) => void;
  removePasswords: (passwords: string[]) => void;
  settings: HistoryStorageSettings;
  changeSettings: (key: string, value: boolean) => void;
}

export interface HistoryStorageSettings {
  history: boolean;
  theme: boolean;
  salt: boolean;
}