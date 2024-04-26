import { useState } from "react";
import Generator from "../Generator";
import History from "../History";
import NavigationBar from "../NavigationBar";
import styles from "./Main.module.scss";
import Settings from "../Settings";

const Main: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("generator");
  return (
    <div className={styles.main}>
      <NavigationBar setSelectedTab={setSelectedTab} />
      {selectedTab === 'generator' ? <Generator/> : selectedTab === 'history' ? <History setSelectedTab={setSelectedTab}/> : <Settings setSelectedTab={setSelectedTab}/>}
    </div>
  );
};

export default Main;
