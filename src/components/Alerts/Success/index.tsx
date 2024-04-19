import React, { useContext } from "react";
import styles from "./Success.module.scss";
import { AlertsContext } from "../../../context/alerts";

interface Props {
  text: string;
}

const Success: React.FC<Props> = ({ text }) => {
  const alert = useContext(AlertsContext);
  
  return (
    <div className={styles.alert + " " + (alert?.isActive ? styles.active : '')}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Success;
