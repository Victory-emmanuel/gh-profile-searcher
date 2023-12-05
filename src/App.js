import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, User } from "./pages/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
