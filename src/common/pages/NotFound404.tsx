import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 h-screen flex-col">
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-6xl">404</h1>
          <h2 className="font-bold text-3xl">page not found</h2>
        </div>
        <Link to={"/home"} className="underline">
          back to home
        </Link>
      </div>
    </>
  );
}

export default NotFound404;
