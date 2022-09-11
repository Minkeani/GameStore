import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
