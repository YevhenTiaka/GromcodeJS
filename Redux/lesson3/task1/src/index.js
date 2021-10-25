import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 1, name: 'Sarah' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(addUser({ id: 3, name: 'Tom' }));
store.dispatch(addUser({ id: 4, name: 'Tod' }));
store.dispatch(addUser({ id: 5, name: 'Ted' }));
store.dispatch(updateUser(5, { name: 'Greg', age: 18, city: 'Kiev' }));

store.dispatch(deleteUser(2));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(reset());
