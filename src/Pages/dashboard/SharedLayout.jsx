import { Outlet } from "react-router-dom";
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
