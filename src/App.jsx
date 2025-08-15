import { BrowserRouter as Router, Routes, Route } from      "react-router-dom";
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/about" element={<About />} />  
        </Routes>
    </Router>
  )
}
export default App;