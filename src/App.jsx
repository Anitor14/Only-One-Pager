import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Analysis, Dashboard, Profile, Template } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/analysis" element={<Analysis />}></Route>
        <Route path="/template" element={<Template />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
