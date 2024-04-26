import React, { ReactElement, createContext } from "react";
import { HistoryStorageSettings, HistoryStorageType, PasswordType } from "../../interfaces";

const HistoryContext = createContext<HistoryStorageType | undefined>(undefined);

interface Props {
  children: ReactElement;
}

export const HistoryProvider: React.FC<Props> = ({ children }) => {
  const [historyStorage, setHistoryStorage] = React.useState<PasswordType[]>(
    []
  );

  const [settings, setSettings] = React.useState<HistoryStorageSettings>({
    history: false,
    theme: true,
    salt: false,
  });

  const changeSettings = (key: string, value: boolean) => {
    setSettings((prev) => ({...prev, [key]: value}));
  }

  const addPassword = ({ id, password, strength, timestamp }: PasswordType) => {
    setHistoryStorage((prev) => [
      ...prev,
      { id, password, strength, timestamp },
    ]);
  };

  const removePasswords = (list_id: string[]) => {
    for (let i = 0; i < list_id.length; i++) {
      setHistoryStorage((prev) => prev.filter((item) => item.id !== list_id[i]))
    }
  }

  return (
    <HistoryContext.Provider
      value={{ historyStorage, addPassword, removePasswords, settings, changeSettings }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
