import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import SidebarItem from "./SidebarItem/SidebarItem.js";
import { useState } from "react";

function Sidebar() {
  const MenuItems = [
    {
      title: "Today",
      icon: "bi bi-0-circle",
    },
    {
      title: "Tomorrow",
      icon: "bi bi-0-circle",
    },
    {
      title: "Yesterday",
      icon: "bi bi-0-circle",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container-fluid">
      <div className="bg-dark col-auto col-md-3 min-vh-100">
        <Link
          className="text-decoration-none d-flex align-items-center text-white"
          to="/">
          <i className=""></i>
          <span className="ms-1 fs-3 fw-bold">Todo App</span>
        </Link>
        <hr />
        {MenuItems.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              item={item}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
