import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Analysis,
  Dashboard,
  Profile,
  Template,
  Form,
  Upload,
  SitePlan,
  Register,
  Login,
  Verify,
  Error,
} from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full overflow-hidden bg-background_grey_color">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/analysis" element={<Analysis />}></Route>
          <Route path="/template" element={<Template />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/payment" element={<SitePlan />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user/verify-email" element={<Verify />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
