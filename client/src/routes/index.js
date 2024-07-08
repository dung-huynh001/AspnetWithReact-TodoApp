import { HeaderOnly } from '~/layouts';
import { DefaultLayout } from '~/layouts';

import Home from '~/pages/Home'
import AddTask from '~/pages/AddTask'
import EditTask from '~/pages/EditTask';

const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/add-task", component: AddTask, layout: HeaderOnly },
    { path: "/edit-task", component: EditTask, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
