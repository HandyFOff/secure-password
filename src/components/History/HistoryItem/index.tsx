import { ChangeEvent, useContext } from "react";
import { PasswordType } from "../../../interfaces";
import styles from "./HistoryItem.module.scss";
import { AlertsContext } from "../../../context/alerts";

interface Props {
  item: PasswordType;
  handleChecboxes: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedPasswords: string[];
}

const HistoryItem: React.FC<Props> = ({
  item,
  handleChecboxes,
  selectedPasswords
}) => {
  const alert = useContext(AlertsContext);

  const copyPassword = () => {
    navigator.clipboard.writeText(item.password);
    alert?.handleAlert();
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <span className={styles.password}>{item.password}</span>
        <span
          className={
            styles.strength +
            " " +
            styles[item.strength.toLowerCase().split(" ").join("-")]
          }
        >
          Password strength - <span>{item.strength}</span>
        </span>
        <span className={styles.time}>Time - {item.timestamp}</span>
      </div>
      <div className={styles.itemControl}>
        <img
          src="assets/icons/copy.svg"
          alt="Copy password"
          onClick={copyPassword}
        />
        <div className={styles["separate-vertical"]}></div>
        <div
          className={styles.checkbox}
        >
          <input
            type="checkbox"
            placeholder="+"
            value={item.id}
            checked={selectedPasswords.includes(item.id)}
            onChange={handleChecboxes}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
