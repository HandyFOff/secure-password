import { FiltersType } from "../../../interfaces";
import styles from './Filters.module.scss'

interface Props {
  passwordLength: number;
  setPasswordLength: (prev: number) => void;
  filters: FiltersType;
  setFilters: (prev: FiltersType) => void;
}

const Filters: React.FC<Props> = ({
  passwordLength,
  setPasswordLength,
  filters,
  setFilters,
}) => {
  return (
    <div className={styles.filters}>
      <div className={`${styles.filter} ${styles.length}`}>
        <div className={styles.lengthTop}>
          <div className={styles.title}>
            <span>Password length</span>
            <div className={styles["separate-vertical"]}></div>
            <span>{passwordLength}</span>
          </div>
          <button
            className={`${styles.btn} ${styles["btn-reset"]}`}
            onClick={() => setPasswordLength(12)}
          >
            <span>RESET</span>
            <img src="assets/icons/history.svg" alt="Reset password" />
          </button>
        </div>
        <div className={styles.lengthBar}>
          <input
            type="range"
            id="range"
            min={1}
            max={32}
            value={passwordLength}
            onChange={(e) => setPasswordLength(+e.target.value)}
            placeholder="0"
          />
        </div>
      </div>
      <div className={styles.filter}>
        <label htmlFor="uppercase">Uppercase (A-Z)</label>
        <input
          id="uppercase"
          name="uppercase"
          type="checkbox"
          checked={filters.uppercase}
          onChange={() =>
            setFilters({ ...filters, uppercase: !filters.uppercase })
          }
        />
      </div>
      <div className={styles.filter}>
        <label htmlFor="lowercase">Lowercase (a-z)</label>
        <input
          id="lowercase"
          name="lowercase"
          type="checkbox"
          checked={filters.lowercase}
          onChange={() =>
            setFilters({ ...filters, lowercase: !filters.lowercase })
          }
        />
      </div>
      <div className={styles.filter}>
        <label htmlFor="symbols">Symbol (!@#$)</label>
        <input
          id="symbols"
          name="symbols"
          type="checkbox"
          checked={filters.symbols}
          onChange={() => setFilters({ ...filters, symbols: !filters.symbols })}
        />
      </div>
      <div className={styles.filter}>
        <label htmlFor="numbers">Number (0-9)</label>
        <input
          id="numbers"
          name="numbers"
          type="checkbox"
          checked={filters.numbers}
          onChange={() => setFilters({ ...filters, numbers: !filters.numbers })}
        />
      </div>
    </div>
  );
};

export default Filters;
