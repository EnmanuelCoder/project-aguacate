import './App.css';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Home from './pages/Home';
import HeaderNav from './components/HeaderNav';



function App() {
  return (
    <BrowserRouter>

      <HeaderNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
