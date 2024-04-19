import React, { useContext } from "react";
import styles from "./Generator.module.scss";
import { usePassword } from "../../hooks/usePassword";
import { AlertsContext } from "../../context/alerts";
import Filters from "./Filters";

const Generator: React.FC = () => {
  const alert = useContext(AlertsContext);

  const {
    password,
    filters,
    passwordLength,
    setPasswordLength,
    setFilters,
    generatePassword,
    passwordSecurity,
  } = usePassword();

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert?.handleAlert();
  };

  return (
    <div className={styles.form}>
      <div className={styles.password}>
        <span>{password ? password : "Here will be password"}</span>
        <img src="assets/icons/copy.svg" alt="Copy it" onClick={copyPassword} />
      </div>
      {password && (
        <div
          className={
            styles.warning +
            " " +
            styles[passwordSecurity.toLowerCase().split(" ").join("-")]
          }
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
              stroke="#3BB800"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.9585 13.375H10.0418V13.4583H9.9585V13.375Z"
              stroke="#3BB800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 7.54163V10.875"
              stroke="#3BB800"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>{passwordSecurity}</span>
        </div>
      )}
      <Filters
        filters={filters}
        passwordLength={passwordLength}
        setFilters={setFilters}
        setPasswordLength={setPasswordLength}
      />
      <div id="separate-horizontal"></div>
      <button
        className={`${styles.btn} ${styles["btn-generate"]}`}
        onClick={generatePassword}
      >
        <span>GENERATE PASSWORD</span>
        <img src="assets/icons/history.svg" alt="Regenerate password" />
      </button>
    </div>
  );
};

export default Generator;
