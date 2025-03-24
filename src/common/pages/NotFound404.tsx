import NavButton from "../layout/navigation/components/NavButton";

function NotFound404() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 h-screen flex-col">
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-6xl">404</h1>
          <h2 className="font-bold text-3xl">page not found</h2>
        </div>
        <NavButton
          path="/home"
          className="bg-[#1A1A1D] px-4 py-2.5 cursor-pointer rounded-md"
        >
          back to home
        </NavButton>
      </div>
    </>
  );
}

export default NotFound404;
