import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
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
  );
}

export default Header;
