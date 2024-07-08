import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(true);

  const taskItems = [
    {
      title: "Dashboard",
      icon: "faHouse",
      link: "/",
      active: true,
    },
    {
      title: "Upcoming",
      icon: "",
      link: "/",
      active: false,
    },
    {
      title: "Today",
      icon: "",
      link: "/",
      active: false,
    },
  ];

  const listItems = [
    {
      title: "Dashboard",
      icon: "",
      link: "/",
      active: true,
    },
    {
      title: "Upcoming",
      icon: "",
      link: "/",
      active: false,
    },
    {
      title: "Today",
      icon: "",
      link: "/",
      active: false,
    },
  ];

  return (
    <aside className={cx("wrapper", { active: toggleMenu })}>
      <div className={cx("inner")}>
        <h3 className={cx("brand")}>
          Todo
          <span
            className={cx("btn-toggle")}
            onClick={() => setToggleMenu(!toggleMenu)}>
            <FontAwesomeIcon icon={toggleMenu ? faCaretDown : faCaretRight} />
          </span>
        </h3>
        {taskItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={cx("menu-item", { active: index === activeItem })}
              onClick={() => {
                setActiveItem(index);
              }}>
              <FontAwesomeIcon icon={["fas", "house"]} />
              {item.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
