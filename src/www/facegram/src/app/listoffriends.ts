import { User } from './user';

let friend0: User = new User();
friend0 = {
          "_username" : "Condy",
          "_email" : "condy@mrnice.com"};

let friend2: User = new User();

let friend3: User = new User();

let friend4: User = new User();

let friend5: User = new User();

export let thefriends: Array<User> = new Array();
thefriends = [ friend0, friend2, friend3, friend4, friend5 ];
