import "./App.css";
import DigimonList from "./components/DigimonList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Search />
        <DigimonList />
      </div>
    </div>
  );
}

export default App;
