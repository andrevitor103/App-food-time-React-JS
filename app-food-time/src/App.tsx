import styles from "./AppMain.module.scss";
import { Comment } from "./components/Comments";
import { Header } from "./components/Header";
import { SnackList } from "./components/SnackList";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header />
      <SnackList />
      <Comment
        message="melhor atendimento da cidade"
        star={4}
        username="andrevitor103"
        userImage="https://picsum.photos/200"
      />
    </div>
  );
}

export default App;
