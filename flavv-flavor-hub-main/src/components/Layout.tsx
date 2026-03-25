import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartSidebar from "./CartSidebar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col grain-overlay">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <CartSidebar />
  </div>
);

export default Layout;
