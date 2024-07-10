import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./EditTask.module.scss";
import TaskForm from "~/components/TaskForm";
import Breadcrumb from "~/layouts/components/Breadcrumb";
import { editTask, getTaskById } from "~/core/services/taskService";

const cx = classNames.bind(styles);

function EditTask() {
  const location = useLocation();
  const path = location.pathname;
  const taskId = path.substring(path.lastIndexOf("/") + 1);
  const [task, setTask] = useState();

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const data = await getTaskById(taskId);
    setTask(data);
  };

  const handleSubmit = async (task) => {
    await editTask(task);
  };

  return (
    <div className={cx("wrapper")}>
      <Breadcrumb
        title="Edit Task"
        path={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Edit Task",
          },
        ]}
      />
      <TaskForm task={task} processing={handleSubmit} />
    </div>
  );
}

export default EditTask;
