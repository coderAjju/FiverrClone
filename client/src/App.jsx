import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { PopularServices } from "./components/PopularServices";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/images" element={<PopularServices />} />
    </Routes>
  );
};

export default App;
