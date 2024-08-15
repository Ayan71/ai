import Front from "./components/frontPage/Front";
import Navbar from "./components/navbar/Navbar";
import Remove from "./components/remove-bg/Remove";
import "./index.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/remove-bg" element={<Remove />}></Route>
        <Route path="/remove-bga" element={<Navbar />}></Route>

      </Routes>
    </div>
  );
}

export default App;
