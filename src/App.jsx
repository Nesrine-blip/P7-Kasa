import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/header.jsx";
import Footer from "./layout/footer/footer.jsx";
import MainContent from "./layout/MainContent/MainContent.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import BannerAbout from "./layout/bannerAbout/bannerAbout.jsx";

 
const App = () => {
  return (
    <Router>
      <Header />

      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/logement" element={<LogementPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContent>

      
      <Footer />
    </Router>
  );
};

export default App;
