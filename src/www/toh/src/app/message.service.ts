import { Injectable } from '@angular/core';

<<<<<<< HEAD
@Injectable({
  providedIn: 'root',
})
=======
@Injectable({ providedIn: 'root' })
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
