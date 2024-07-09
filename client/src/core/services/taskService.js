import * as request from '~/utils/request';

export const addNewTask = async (data) => {
    try {
        const res = await request.post('Tasks/AddTask', data);
        return res.data;
    } catch (ex) {
        console.log(ex);
    }
}