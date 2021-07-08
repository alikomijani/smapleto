import ToDoSingle from './pages/ToDoSingle/ToDoSingle';
import ToDoArchive from './pages/ToDoArchive/ToDoArchive';
import ToDoForm from './pages/ToDoForm/ToDoForm';

const routes = [
    { path: '/', exact: true, component: ToDoArchive },
    { path: '/add', exact: true, component: ToDoForm },
    { path: '/:id', exact: true, component: ToDoSingle },
    { path: '/update/:id', exact: true, component: ToDoForm },
]
export default routes