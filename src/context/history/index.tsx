import React, { ReactElement, createContext } from "react";
import { HistoryStorageType, PasswordType } from "../../interfaces";

const HistoryContext = createContext<HistoryStorageType | undefined>(undefined);

interface Props {
  children: ReactElement;
}

export const HistoryProvider: React.FC<Props> = ({ children }) => {
  const [historyStorage, setHistoryStorage] = React.useState<PasswordType[]>(
    []
  );

  const addPassword = ({ id, password, strength, timestamp }: PasswordType) => {
    setHistoryStorage((prev) => [
      ...prev,
      { id, password, strength, timestamp },
    ]);
  };

  const removePasswords = (passwords: PasswordType[]) => {
    for (let i = 0; i < passwords.length; i++) {
      if (historyStorage.find((item) => item.id === passwords[i].id)) {
        setHistoryStorage((prev) => prev.filter(
          (item) => item.id !== passwords[i].id
        ));
      }
    }
  };

  return (
    <HistoryContext.Provider
      value={{ historyStorage, addPassword, removePasswords }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
