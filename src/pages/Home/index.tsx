import { useContext } from "react";
import Success from "../../components/Alerts/Success";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import HistoryContext from "../../context/history";

const Home: React.FC = () => {
  const history = useContext(HistoryContext);
  return (
    <div className={`wrapper ${history?.settings.theme ? "dark" : "light"}`}>
      <div className="container">
        <Success text={"Copied!"} />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
