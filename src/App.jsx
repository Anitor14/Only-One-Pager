import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  SharedLayout,
  ProtectedRoute,
  Landing,
} from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="w-full h-full overflow-hidden bg-background_grey_color">
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/template" element={<Template />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<Form />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/payment" element={<SitePlan />} />
            <Route />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/verify-email" element={<Verify />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
