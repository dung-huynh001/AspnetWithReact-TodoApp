import classNames from "classnames/bind";
import styles from "./AddTask.module.scss";
import AddTaskForm from "~/components/AddTaskForm";

const cx = classNames.bind(styles);

function AddTask() {
  return (
    <div className={cx("wrapper")}>
      <AddTaskForm />
    </div>
  );
}

export default AddTask;
