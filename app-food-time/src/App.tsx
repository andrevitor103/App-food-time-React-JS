import styles from "./AppMain.module.scss";
import { Header } from "./components/Header";
import { Snack } from "./components/Snack";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header />
      <Snack />
    </div>
  );
}

export default App;
