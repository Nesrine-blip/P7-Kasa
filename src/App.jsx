import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Error from "./pages/errorPage";
import Logement from "./pages/logementPage";








const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logement" element={<LogementPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;