import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('ua'));

store.dispatch(addProduct({ id: 1, name: 'Milk' }));
store.dispatch(addProduct({ id: 2, name: 'Bread' }));
store.dispatch(removeProduct(2));

store.dispatch(setUser({ name: 'Ann' }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: 'Ann' }));
