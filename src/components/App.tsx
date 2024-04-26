import { AlertsProvider } from "../context/alerts";
import { HistoryProvider } from "../context/history";
import Home from "../pages/Home";

const App: React.FC = () => {
  return (
    <HistoryProvider>
      <AlertsProvider>
        <Home />
      </AlertsProvider>
    </HistoryProvider>
  );
};

export default App;
