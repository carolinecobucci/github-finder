import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repos from "./pages/Repos";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-3 bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos/:username" element={<Repos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
