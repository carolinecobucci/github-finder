import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repos from "./pages/Repos";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen pt-3 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4">GitHub Finder</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/repos/:username" element={<Repos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
