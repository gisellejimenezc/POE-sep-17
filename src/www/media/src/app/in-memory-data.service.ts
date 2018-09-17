import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
<<<<<<< HEAD
    const books = [
        { id: 1, title: 'Java' },
        { id: 2, title: 'Python' },
        { id: 3, title: 'El olvido' },
        { id: 4, title: 'Lo que no tiene' },
        { id: 5, title: 'Historia' },
        { id: 6, title: 'El principito' },
        { id: 7, title: 'Finding' },
        { id: 8, title: 'Millenium' },
        { id: 9, title: 'El cuarto' },
        { id: 10, title: 'El laberinto' }
    ];
    return {books};
  }
}
=======
    const books = [{"type":"book","authorList":[],"id":3,"price":15.0,"title":"Postgres","nbPage":0},{"type":"book","authorList":[],"id":4,"price":18.0,"title":"Angular","nbPage":0},{"type":"book","authorList":[],"id":5,"price":25.3,"title":"sql","nbPage":0},{"type":"book","authorList":[],"id":1,"price":21.9,"title":"Java","nbPage":0},{"type":"book","authorList":[],"id":2,"price":11.0,"title":"Python","nbPage":0},{"type":"book","authorList":[],"id":6,"price":99.0,"title":"REST","nbPage":0}];
    return {books};
  }
}
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
