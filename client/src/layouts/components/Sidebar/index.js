import { useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBriefcase, faCalendarCheck, faCalendarWeek, faSchool } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  const [activeItem, setActiveItem] = useState(1);
  const [toggleMenu, setToggleMenu] = useState(false);

  const taskItems = [
    {
      id: 1,
      title: "Upcoming",
      icon: faCalendarCheck,
      link: "/",
    },
    {
      id: 2,
      title: "All Task",
      icon: faCalendarWeek,
      link: "/",
    },
  ];

  const listItems = [
    {
      id: 3,
      title: "School",
      icon: faSchool,
      link: "/",
    },
    {
      id: 4,
      title: "Work",
      icon: faBriefcase,
      link: "/",
    },
  ];

  return (
    <aside className={cx("wrapper", { close: toggleMenu })}>
      <div className={cx("inner")}>
        <div className={cx("brand")}>
          <span
            className={cx("btn-toggle")}
            onClick={() => setToggleMenu(!toggleMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <span className={cx('group')}>Tasks</span>
        {taskItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className={cx("menu-item", { active: item.id === activeItem })}
              onClick={() => {
                setActiveItem(item.id);
              }}>
              <FontAwesomeIcon icon={item.icon} />
              <span className={cx('text')}>{item.title}</span>
            </Link>
          );
        })}

        <span className={cx('group')}>Lists</span>
        {listItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className={cx("menu-item", { active: item.id === activeItem })}
              onClick={() => {
                setActiveItem(item.id);
              }}>
              <FontAwesomeIcon icon={item.icon} />
              <span className={cx('text')}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
