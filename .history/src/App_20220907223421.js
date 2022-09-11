import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage/HomePage";
import {store} from './redux'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
