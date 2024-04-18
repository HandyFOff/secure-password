import { AlertsProvider } from "../context";
import Success from "./Alerts/Success";
import Footer from "./Footer";
import Header from "./Header/index";
import Main from "./Main";

const App: React.FC = () => {
  return (
    <AlertsProvider>
      <div className="wrapper container">
        <Success text={"Copied!"} />
        <Header />
        <Main />
        <Footer />
      </div>
    </AlertsProvider>
  );
};

export default App;
