import { ReactElement, createContext, useState } from "react";
import { AlertsInterface } from "../../interfaces";

interface Props {
  children: ReactElement;
}

export const AlertsContext = createContext<AlertsInterface | undefined>(
  undefined
);

export const AlertsProvider: React.FC<Props> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAlert = () => {
    if (!isActive) {
      setIsActive((prev) => !prev);
      const timeoutid = setTimeout(() => setIsActive((prev) => !prev), 1500);
  
      return () => clearTimeout(timeoutid);
    }
  };

  return (
    <AlertsContext.Provider value={{ isActive, handleAlert }}>
      {children}
    </AlertsContext.Provider>
  );
};
