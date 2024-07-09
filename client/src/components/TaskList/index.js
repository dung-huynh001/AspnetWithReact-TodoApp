import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./TaskList.module.scss";

const cx = classNames.bind(styles);
const todoList = [
  {
    id: 1,
    title: "t1",
    dueTime: "10:00 AM",
    description: "do something...",
  },
  {
    id: 2,
    title: "t2",
    dueTime: "12:00 AM",
    description: "do something...",
  },
  {
    id: 3,
    title: "t3",
    dueTime: "13:00 AM",
    description: "do something...",
  },
];

function TaskList() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("container")}>
          <h4 className={cx("title")}>To do</h4>
          <ul className={cx("task-list")}>
            {todoList.map((task) => {
              return (
                <Tippy
                  key={task.id}
                  placement="bottom"
                  render={(attrs) => (
                    <div className={cx("details")}>
                      <h4 className={cx("title")}>{task.title}</h4>
                      <p className={cx("description")}>{task.description}</p>
                      <span className={cx("due-time")}>{task.dueTime}</span>
                    </div>
                  )}>
                  <li>
                    <span>{task.title}</span>
                    <Tippy
                      placement="right"
                      trigger="click"
                      interactive="true"
                      render={(attrs) => (
                        <div className={cx("actions")} tabIndex="-1" {...attrs}>
                          <button>Next status</button>
                          <button>Edit</button>
                          <button>Delete</button>
                        </div>
                      )}>
                      <button>
                        <FontAwesomeIcon icon={faEllipsis} />
                      </button>
                    </Tippy>
                  </li>
                </Tippy>
              );
            })}
          </ul>
        </div>
        <div className={cx("container")}>
          <h4 className={cx("title")}>Doing</h4>
          <ul className={cx("task-list")}></ul>
        </div>
        <div className={cx("container")}>
          <h4 className={cx("title")}>Done</h4>
          <ul className={cx("task-list")}></ul>
        </div>
        <div className={cx("container")}>
          <h4 className={cx("title")}>Out of date</h4>
          <ul className={cx("task-list")}></ul>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
