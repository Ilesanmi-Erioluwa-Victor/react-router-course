import { Link, useLocation } from "react-router-dom";
import { slugify } from "../Utils/Slugify";

function CustomLink({ to, children }) {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];

  const match = playerId === to;

  const Styles =
    match === true ? { fontWeight: 900, color: "var(--white" } : {};

  return (
    <li>
      <Link
        to={{
          pathname: to,
          search: location.search,
        }}
        style={{ ...Styles }}
      >
        {children}
      </Link>
    </li>
  );
}

export function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>

      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink
            key={item}
            to={slugify(item)}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}
