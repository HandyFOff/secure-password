import { AlertsProvider } from "../context/alerts";
import { HistoryProvider } from "../context/history";
import Success from "./Alerts/Success";
import Footer from "./Footer";
import Header from "./Header/index";
import Main from "./Main";

const App: React.FC = () => {
  return (
    <HistoryProvider>
      <AlertsProvider>
        <div className="wrapper container">
          <Success text={"Copied!"} />
          <Header />
          <Main />
          <Footer />
        </div>
      </AlertsProvider>
    </HistoryProvider>
  );
};

export default App;
