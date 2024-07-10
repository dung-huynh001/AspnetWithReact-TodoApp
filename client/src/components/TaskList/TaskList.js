import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { ToastContainer, toast } from "react-toastify";
import "tippy.js/dist/tippy.css";

import { getAll, changeStatus, removeTask } from "~/core/services/taskService";
import styles from "./TaskList.module.scss";

const cx = classNames.bind(styles);

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [execute, setExecute] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [execute]);

  const fetchTasks = async () => {
    const data = await getAll();
    setTasks(data);
  };

  const todoList = tasks.filter((task) => task.status === 0);
  const doingList = tasks.filter((task) => task.status === 1);
  const doneList = tasks.filter((task) => task.status === 2);
  const outOfDateList = tasks.filter((task) => task.status === 3);

  const handleNextStatus = async (task) => {
    let nextStatus = "";
    switch (task.status) {
      case 0:
        nextStatus = "processing";
        break;
      case 1:
        nextStatus = "completed";
        break;
      default:
        break;
    }

    await changeStatus(task.id, nextStatus);
    setExecute(!execute);
    notify("Changed status success", "success");
  };

  const handlePreviousStatus = async (task) => {
    let previousStatus = "";
    switch (task.status) {
      case 1:
        previousStatus = "pending";
        break;
      case 2:
        previousStatus = "processing";
        break;
      default:
        break;
    }

    await changeStatus(task.id, previousStatus);
    setExecute(!execute);
    notify("Changed status success", "success");
  };

  const handleRestart = async (task) => {
    await changeStatus(task.id, "pending");
    setExecute(!execute);
    notify("Changed status success", "success")
  };

  const handleDelete = async (id) => {
    await removeTask(id);
    setExecute(!execute);
    notify("Removed task success", "success");
  };

  const notify = (message, type="success") => {
    toast[type](message);
  };

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
                    <div className={cx("details")} tabIndex="-1" {...attrs}>
                      <h4 className={cx("title")}>{task.title}</h4>
                      <p className={cx("description")}>{task.description}</p>
                      <span className={cx("due-time")}>{task.dueDate}</span>
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
                          <button
                            onClick={() => {
                              handleNextStatus(task);
                            }}>
                            Next status
                          </button>
                          <Link
                            to={`/edit-task/${task.id}`}
                            className={cx("btn")}>
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(task.id);
                            }}>
                            Delete
                          </button>
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
          <ul className={cx("task-list")}>
            {doingList.map((task) => {
              return (
                <Tippy
                  key={task.id}
                  placement="bottom"
                  render={(attrs) => (
                    <div className={cx("details")} tabIndex="-1" {...attrs}>
                      <h4 className={cx("title")}>{task.title}</h4>
                      <p className={cx("description")}>{task.description}</p>
                      <span className={cx("due-time")}>{task.dueDate}</span>
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
                          <button
                            onClick={() => {
                              handleNextStatus(task);
                            }}>
                            Next status
                          </button>
                          <button
                            onClick={() => {
                              handlePreviousStatus(task);
                            }}>
                            Previous status
                          </button>
                          <Link
                            to={`/edit-task/${task.id}`}
                            className={cx("btn")}>
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(task.id);
                            }}>
                            Delete
                          </button>
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
          <h4 className={cx("title")}>Done</h4>
          <ul className={cx("task-list")}>
            {doneList.map((task) => {
              return (
                <Tippy
                  key={task.id}
                  placement="bottom"
                  render={(attrs) => (
                    <div className={cx("details")} tabIndex="-1" {...attrs}>
                      <h4 className={cx("title")}>{task.title}</h4>
                      <p className={cx("description")}>{task.description}</p>
                      <span className={cx("due-time")}>{task.dueDate}</span>
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
                          <button
                            onClick={() => {
                              handlePreviousStatus(task);
                            }}>
                            Previous status
                          </button>
                          <Link
                            to={`/edit-task/${task.id}`}
                            className={cx("btn")}>
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(task.id);
                            }}>
                            Delete
                          </button>
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
          <h4 className={cx("title")}>Out of date</h4>
          <ul className={cx("task-list")}>
            {outOfDateList.map((task) => {
              return (
                <Tippy
                  key={task.id}
                  placement="bottom"
                  render={(attrs) => (
                    <div className={cx("details")} tabIndex="-1" {...attrs}>
                      <h4 className={cx("title")}>{task.title}</h4>
                      <p className={cx("description")}>{task.description}</p>
                      <span className={cx("due-time")}>{task.dueDate}</span>
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
                          <button
                            onClick={() => {
                              handleRestart(task);
                            }}>
                            Restart
                          </button>
                          <Link
                            to={`/edit-task/${task.id}`}
                            className={cx("btn")}>
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(task.id);
                            }}>
                            Delete
                          </button>
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
      </div>
      <ToastContainer autoClose="3000" theme="colored"/>
    </div>
  );
}

export default TaskList;
