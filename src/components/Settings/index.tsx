import { useContext } from "react";
import styles from "./Settings.module.scss";
import HistoryContext from "../../context/history";

interface Props {
  setSelectedTab: (prev: string) => void;
}

const Settings: React.FC<Props> = ({ setSelectedTab }) => {
  const history = useContext(HistoryContext);

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <img
          onClick={() => setSelectedTab("generator")}
          src="assets/icons/chevron-left.svg"
          className={styles["back-arrow"]}
          alt="Go back"
        />
        <h1 className={styles.topTitle}>Settings</h1>
      </div>
      <div className={styles.settings}>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>
              <h1 className={styles.title}>History</h1>
              <p className={styles.description}>
                Password history — Bookmark history button on the header...
              </p>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                placeholder="+"
                checked={history?.settings.history}
                onChange={(e) =>
                  history?.changeSettings("history", e.target.checked)
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>
              <h1 className={styles.title}>Theme</h1>
              <p className={styles.description}>
                Dark Mode — Toggle to activate dark and light mode…
              </p>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                placeholder="+"
                checked={history?.settings.theme}
                onChange={(e) =>
                  history?.changeSettings("theme", e.target.checked)
                }
              />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title + " " + styles.bold}>
            Advanced settings
          </h1>
          <div className={styles.itemContent}>
            <div className={styles.itemTitle}>
              <h1 className={styles.title}>Salt</h1>
              <p className={styles.description}>
                Salt string — A custom string added to the password before
                hashing for enhanced security...
              </p>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                placeholder="+"
                checked={history?.settings.salt}
                onChange={(e) =>
                  history?.changeSettings("salt", e.target.checked)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
