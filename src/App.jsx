import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Analysis, Dashboard, Profile, Template } from "./Pages";
import { Business } from "./Pages/Business";
import { Design } from "./Pages/Design";
import { Communication } from "./Pages/Communication";
import { Geography } from "./Pages/Geography";
import { Payment } from "./Pages/Payment";
import { Almost } from "./Pages/Almost";
import { SitePlan } from "./Pages/SitePlan";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/analysis" element={<Analysis />}></Route>
        <Route path="/template" element={<Template />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/communication" element={<Communication />}></Route>
        <Route path="/geography" element={<Geography />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/almost" element={<Almost />}></Route>
        <Route path="/siteplan" element={<SitePlan />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
