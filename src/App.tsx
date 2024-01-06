import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contacts/Contact";
import Home from "./pages/Home/Home";
import NavbarDesktop from "./pages/Home/components/NavbarDesktop";
import NavbarMobile from "./pages/Home/components/NavbarMobile";
import { useEffect } from "react";
import i18n from "./i18n";

function App() {
  useEffect(() => {
    console.log(navigator.language);
    i18n.changeLanguage(navigator.language);
  }, []);
  return (
    <div className="bg-white">
      <BrowserRouter>
        <ToastContainer />
        <NavbarDesktop />
        <NavbarMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
