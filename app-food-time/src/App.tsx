import styles from "./AppMain.module.scss";
import { Header } from "./components/Header";
import { SnackList } from "./components/SnackList";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header />
      <SnackList />
    </div>
  );
}

export default App;
