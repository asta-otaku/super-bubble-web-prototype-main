import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="bg-white sticky pt-2 top-0 right-0 left-0 z-50">
      <nav className="max-w-xs w-full mx-auto bg-[#F6F6F6] rounded-3xl font-medium text-sm flex items-center justify-evenly p-0.5">
        {[
          {
            name: "Home",
            page: "/",
          },
          {
            name: "About",
            page: "/about",
          },
          {
            name: "Blog",
            page: "/blog",
          },
          {
            name: "Jobs",
            page: "/jobs",
          },
        ].map(({ page, name }) => (
          <Link
            to={page}
            key={page}
            className={`p-2 min-w-fit decoration-transparent text-center text-primary w-full ${
              location.pathname === page.toLowerCase().replace(" ", "")
                ? "bg-white rounded-3xl"
                : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
