import styles from "./AppMain.module.scss";
import { Comment } from "./components/Comments";
import { Header } from "./components/Header";
import { ListComments } from "./components/ListComments";
import { SnackList } from "./components/SnackList";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header />
      <SnackList />
      <ListComments />
    </div>
  );
}

export default App;
