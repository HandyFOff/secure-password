import { ChangeEvent, useContext, useState } from "react";
import styles from "./History.module.scss";
import HistoryItem from "./HistoryItem";
import HistoryContext from "../../context/history";
import { PasswordType } from "../../interfaces";

interface Props {
  setSelectedTab: (prev: string) => void;
}

const History: React.FC<Props> = ({ setSelectedTab }) => {
  const history = useContext(HistoryContext);
  const [selectedPasswords, setSelectedPasswords] = useState<string[]>([]);

  const handleChecboxes = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isSelected = e.target.checked;

    if (isSelected) {
      setSelectedPasswords((prev) => [...prev, value]);
    } else {
      setSelectedPasswords((prev) => prev.filter((item) => item !== value));
    }
  };

  const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (history) {
      if (isChecked) {
        setSelectedPasswords(history.historyStorage.map((item) => item.id));
      } else {
        setSelectedPasswords([]);
      }
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
          <input type="checkbox" placeholder="+" onChange={selectAll} />
        </div>
      </div>
      <div className={styles.content}>
        {history?.historyStorage.map((item: PasswordType) => {
            return (
              <HistoryItem
                key={item.id}
                item={item}
                handleChecboxes={handleChecboxes}
                selectedPasswords={selectedPasswords}
              />
            );
          })}
      </div>
    </div>
  );
};

export default History;
