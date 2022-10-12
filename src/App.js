import Home from "./pages/Home";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";


function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;


