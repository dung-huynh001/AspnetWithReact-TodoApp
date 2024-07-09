import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./BtnAddTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BtnAddTask() {
  return (
    <div className={cx("wrapper")}>
      <Link className={cx("btn-add")} to={"/add-task"}>
        <FontAwesomeIcon icon={faPlus} /> <span>Add New Task</span>
      </Link>
    </div>
  );
}

export default BtnAddTask;
