import { Outlet } from "react-router-dom";
import HeaderSection5 from "../header/HeaderSection5";
import LeftSidebarSection from "../sidebar/LeftSidebarSection";
import FooterSection from "../footer/FooterSection";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useRef, useState } from "react";

const InnerLayoutStyle5 = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  const mainBackgroundImg = useAppSelector((state) => state.mainBg.mainBg);
  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const toggleSidebarClose = () => {
    setSidebarOpen(false);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`home-ota ${darkMode ? "dark-theme" : "light-theme"} ${
        mainBackgroundImg !== "" ? "bg-detected" : ""
      } ${sidebarOpen ? "mobile-menu-open" : ""}`}
      style={{
        ...(mainBackgroundImg !== "" && {
          backgroundImage: `url(${mainBackgroundImg})`,
        }),
      }}
    >
      <div className="webdesh-page-wrapper">
        <LeftSidebarSection
          customLogo="/img/core-img/logo-small.png"
          noTitle
          logoutBtn
          iconOnly
          noDefaultOpen
          sidebarRef={sidebarRef}
          toggleClose={toggleSidebarClose}
        />
        <div className="webdesh-page-content">
          <HeaderSection5 toggleSidebarOpen={toggleSidebarOpen} />
          <div className="main-content-wrap">
            <div className="main-container">
              <div className="container">
                <Outlet />
              </div>
              <div className="container">
                <div className="mt-4"></div>
                <FooterSection footerStyle="mt-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InnerLayoutStyle5;
