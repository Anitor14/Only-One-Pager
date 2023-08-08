import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import {
  Form,
  Profile,
  Analysis,
  Template,
  Upload,
  SitePlan,
  Dashboard,
} from "../../Pages";
import { Navbar, Footer } from "../../components";
const SharedLayout = () => {
  return (
    <main className="w-full overflow-hidden bg-background_grey_color">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
