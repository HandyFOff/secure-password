import styles from "./History.module.scss";
import HistoryItem from "./HistoryItem";

const History: React.FC = () => {
  return (
    <div className={styles.history}>
      <div className={styles.top}>
        <div className={styles.breadcrumbs}>
          <img src="assets/icons/chevron-left.svg" alt="Go back" />
          <div className={styles.breadcrumbsInfo}>
            <span>History</span>
            <div className={styles["separate-vertical"]}></div>
            <span>0 / 3</span>
          </div>
        </div>
        <button type="button" className={styles["btn-delete"]}>
          <span>Delete</span>
          <img src="assets/icons/trash.svg" alt="Delete it" />
        </button>
      </div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <span>Select all</span>
          <input type="checkbox" placeholder="+" />
        </div>
      </div>
      <div className={styles.content}>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
      </div>
    </div>
  );
};

export default History;
