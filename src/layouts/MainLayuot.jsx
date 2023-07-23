import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const MainLayuot = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayuot;
