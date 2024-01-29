import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/PrivacyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AboutCookiesPage from "./pages/AboutCookiesPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import ManageCookiesPage from "./pages/ManageCookiesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia) {
      let darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (darkThemeQuery.matches) {
        console.log("Dark theme");
        setDarkMode(true);
      } else {
        console.log("Light theme");
        setDarkMode(false);
      }
    }
  }, []);

  const darkModeHandle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <>
      <Router>
        <Header darkMode={darkMode} toggleTheme={darkModeHandle} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/books/:id' element={<BookPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/privacy' element={<PrivacyPage />} />
          <Route path='/cookies' element={<AboutCookiesPage />} />
          <Route path='/terms' element={<TermsOfUsePage />} />
          <Route path='/accessibility' element={<AccessibilityPage />} />
          <Route path='/manage-cookies' element={<ManageCookiesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
