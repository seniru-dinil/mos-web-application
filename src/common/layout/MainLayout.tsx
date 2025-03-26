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
      <h1>this is main lay out yow</h1>
      {children}
      okay this is new
    </>
  );
}

export default MainLayout;
