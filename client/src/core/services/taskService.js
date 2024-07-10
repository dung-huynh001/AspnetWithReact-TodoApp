import * as request from "~/utils/request";

export const addNewTask = async (data) => {
  try {
    const res = await request.post("Tasks/AddTask", data, {});
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const editTask = async (data) => {
  try {
    const res = await request.patch("Tasks/UpdateTask", data, {});
    return res.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getAll = async () => {
  try {
    const res = await request.get("Tasks/GetAll");
    return res;
  } catch (ex) {
    console.log(ex);
  }
};

export const changeStatus = async (id, status) => {
  try {
    const res = await request.patch(
      "Tasks/ChangeTaskStatus",
      { id, status },
      {}
    );
    return res;
  } catch (ex) {
    console.log(ex);
  }
};

export const getTaskById = async (id) => {
  try {
    const res = await request.get("Tasks/GetTaskById", {
      params: {
        id: id,
      },
    });
    return res;
  } catch (ex) {
    console.log(ex);
  }
};

export const removeTask = async (id) => {
  try {
    const res = await request.remove("Tasks/RemoveTask", {
      params: {
        id: id,
      },
    });
    return res;
  } catch (ex) {
    console.log(ex);
  }
};
