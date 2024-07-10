import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./TaskForm.module.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const cx = classNames.bind(styles);

function TaskForm({ task: selectedTask = {}, processing }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [status, setStatus] = useState(0);
  const [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(selectedTask.title ?? "");
    setDescription(selectedTask.description ?? "");
    setDueTime(selectedTask.dueDate ?? "");
    setStatus(selectedTask.status ?? 0);
    setId(selectedTask.id ?? 0);
  }, [selectedTask.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      dueTime,
    };
    if (selectedTask.status !== null || selectedTask.status !== undefined) {
      task.status = status;
      task.id = id;
    }

    processing(task);
    if (!selectedTask.id) {
      resetForm();
      notify("Created success!");
    } else {
      notify("Updated success!");
    }
  };

  const resetForm = () => {
    setTitle("");
    setDueTime("");
    setDescription("");
  };

  const notify = (message) => toast.success(message);

  return (
    <div className={cx("container")}>
      <form onSubmit={handleSubmit} className={cx("wrapper")}>
        <div className={cx("input-box")}>
          <label htmlFor="title" className={cx("label")}>
            Title
          </label>
          <input
            type="text"
            id="title"
            className={cx("input")}
            placeholder="e.g Do Homework"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={cx("input-box")}>
          <label htmlFor="description" className={cx("label")}>
            Description
          </label>
          <textarea
            id="description"
            className={cx("input")}
            placeholder="e.g Step1: Do Something"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required></textarea>
        </div>
        <div className={cx("input-box")}>
          <label htmlFor="dueTime" className={cx("label")}>
            Due Time
          </label>
          <input
            type="datetime-local"
            id="dueTime"
            className={cx("input")}
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            required
          />
        </div>
        {Object.keys(selectedTask).length !== 0 ? (
          <div className={cx("input-box")}>
            <label htmlFor="dueTime" className={cx("label")}>
              Status
            </label>
            <select
              className={cx("input")}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}>
              <option value="0">Pending</option>
              <option value="1">Processing</option>
              <option value="2">Completed</option>
              <option value="3">Out of date</option>
            </select>
          </div>
        ) : (
          ""
        )}

        <button type="submit" className={cx("btn-submit")}>
          Submit
        </button>
      </form>

      <ToastContainer autoClose="3000" theme="colored"/>
    </div>
  );
}

export default TaskForm;
