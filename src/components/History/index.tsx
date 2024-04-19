import { useContext, useState } from "react";
import styles from "./History.module.scss";
import HistoryItem from "./HistoryItem";
import HistoryContext from "../../context/history";
import { PasswordType } from "../../interfaces";

interface Props {
  setSelectedTab: (prev: string) => void;
}

const History: React.FC<Props> = ({ setSelectedTab }) => {
  const history = useContext(HistoryContext);
  const [selectedPasswords, setSelectedPasswords] = useState<PasswordType[]>(
    []
  );

  const [isAllSelected, setIsAllSelected] = useState(false);

  const handlerSelectedPasswords = (item: PasswordType) => {
    if (!selectedPasswords.find((password) => password === item)) {
      setSelectedPasswords((prev) => [...prev, item]);
    } else {
      const filtred = selectedPasswords.filter(
        (password) => password.id !== item.id
      );
      setSelectedPasswords(filtred);
    }
  };

  return (
    <div className={styles.history}>
      <div className={styles.top}>
        <div className={styles.breadcrumbs}>
          <img
            src="assets/icons/chevron-left.svg"
            alt="Go back"
            onClick={() => setSelectedTab("generator")}
          />
          <div className={styles.breadcrumbsInfo}>
            <span>History</span>
            <div className={styles["separate-vertical"]}></div>
            <span>0 / 3</span>
          </div>
        </div>
        <button
          type="button"
          className={styles["btn-delete"]}
          onClick={() => history?.removePasswords(selectedPasswords)}
        >
          <span>Delete</span>
          <img src="assets/icons/trash.svg" alt="Delete it" />
        </button>
      </div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <span>Select all</span>
          <input onClick={() => setIsAllSelected((prev) => !prev)}
            type="checkbox"
            placeholder="+"
          />
        </div>
      </div>
      <div className={styles.content}>
        {history?.historyStorage.map((item) => {
          return (
            <HistoryItem
              key={item.id}
              item={item}
              handlerSelectedPasswords={handlerSelectedPasswords}
              selectedPasswords={selectedPasswords}
              isAllSelected={isAllSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default History;
