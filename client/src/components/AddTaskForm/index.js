import classNames from "classnames/bind";
import styles from "./AddTaskForm.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function AddTaskForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [dueTime, setDueTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      dueTime,
    };

    console.log(task);

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDueTime('');
    setDescription('');
  };

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
            placeholder="e.g Step1: Do Somthing"
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
        <button type="submit" className={cx("btn-submit")}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
