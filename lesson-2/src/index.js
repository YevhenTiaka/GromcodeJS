import { printProfile } from './profile';
const userData = {
  name: 'Tom',
  age: 17,
};
const profile = {
  ...userData,
  company: 'Gromcode',
};
// fsss
printProfile(profile);
