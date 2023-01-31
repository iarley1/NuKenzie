import { RoutesMain as Routes } from "./routes";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Routes />
      </DataProvider>
    </>
  );
}

export default App;
