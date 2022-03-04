import "./App.css";
import DigimonList from "./components/DigimonList";
import Search from "./components/Search";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App-header">
        <Search />
        <DigimonList />
      </div>
    </div>
  );
}

export default App;
