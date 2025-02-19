import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";
import Loading from "@components/Loading";
import Footer from "@components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default RootLayout;
