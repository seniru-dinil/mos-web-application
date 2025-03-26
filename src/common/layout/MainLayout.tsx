import AutoHideComponent from "./navigation/AutoHideComponent";
import Navbar from "./navigation/Navbar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <AutoHideComponent>
        <Navbar />
      </AutoHideComponent>
      {children}
      okay this is new
    </>
  );
}

export default MainLayout;
