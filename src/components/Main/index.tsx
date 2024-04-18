import Generator from "../Generator";
import History from "../History";
import NavigationBar from "../NavigationBar";
import styles from './Main.module.scss'

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <NavigationBar/>
      {/* <Generator/> */}
      <History/>
    </div>
  )
}

export default Main;