import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
