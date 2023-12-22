import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavbarDesktop from "./pages/Home/components/NavbarDesktop";

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <NavbarDesktop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
