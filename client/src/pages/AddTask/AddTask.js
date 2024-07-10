import classNames from "classnames/bind";
import styles from "./AddTask.module.scss";
import TaskForm from "~/components/TaskForm";
import Breadcrumb from "~/layouts/components/Breadcrumb";
import { addNewTask } from "~/core/services/taskService";

const cx = classNames.bind(styles);

function AddTask() {
  const handleSubmit = async (task) => {
    await addNewTask(task);
  };

  return (
    <div className={cx("wrapper")}>
      <Breadcrumb
        title="Add New Task"
        path={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Add New Task",
          },
        ]}
      />
      <TaskForm processing={handleSubmit}/>
    </div>
  );
}

export default AddTask;
