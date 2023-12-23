import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
