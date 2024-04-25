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

  const removePasswords = (list_id: string[]) => {
    for (let i = 0; i < list_id.length; i++) {
      setHistoryStorage((prev) => prev.filter((item) => item.id !== list_id[i]))
    }
  }

  return (
    <HistoryContext.Provider
      value={{ historyStorage, addPassword, removePasswords }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
