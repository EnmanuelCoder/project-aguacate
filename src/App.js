import "./App.css";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNav from "./components/HeaderNav";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";


function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;


