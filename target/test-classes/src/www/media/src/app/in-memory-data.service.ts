import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
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