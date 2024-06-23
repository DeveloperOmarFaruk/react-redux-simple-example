import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Counter/Counter";
import Store from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
