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
    </>
  );
}

export default MainLayout;
