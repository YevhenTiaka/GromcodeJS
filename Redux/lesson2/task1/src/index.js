import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 76, name: 'Vasia' }));
store.dispatch(addUser({ id: 85, name: 'EscheKtoTo' }));
store.dispatch(addUser({ id: 54, name: 'Oleg' }));
store.dispatch(addUser({ id: 43, name: 'Koly' }));
store.dispatch(addUser({ id: 25, name: 'Andrei' }));
store.dispatch(addUser({ id: 27, name: 'Ivan' }));
store.dispatch(deleteUser(76));
store.dispatch(deleteUser(54));
console.log(store.getState());
