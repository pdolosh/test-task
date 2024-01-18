import "./App.css";
import { Header } from "./view/components/header";
import Main from "./view/pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__wrapper">
        <Main />
      </div>
    </div>
  );
}

export default App;
