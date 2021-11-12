import styles from "./AppMain.module.scss";
import { CommentForm } from "./components/CommentsForm";
import { Header } from "./components/Header";
import { ItemCar } from "./components/ItemCar";
import { ListComments } from "./components/ListComments";
import { ShopCar } from "./components/ShopCar";
import { SnackList } from "./components/SnackList";

function App() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header />
      <ShopCar />
      <SnackList />
      <ListComments />
      <CommentForm />
    </div>
  );
}

export default App;
