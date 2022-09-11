import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import GamePage from "./components/GamePage/GamePage";
import OrderPage from "./components/OrderPage/OrderPage";
import HomePage from "./pages/HomePage/HomePage";
import {store} from './redux'
import Agreement from "./components/Agreement/Agreement";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<Agreement />} />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
