import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Analysis, Dashboard, Profile, Template } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full overflow-hidden bg-background_grey_color">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
          <Route path="/template" element={<Template />}></Route>
        </Routes>
        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
