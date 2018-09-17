import {Message} from './message';

export class User{
    private _username : string;
    private _email : string;
    private _password : string;
    private _friends : Array<User> = [];
    private _messages : Array<Message> = [];

get username(){return this._username;}
set username(username : string){this._username = username;}

getEmail(){return this._email;}
setEmail(email : string){this._email = email;}

getPassword(){return this._password;}
setPassword(password : string){this._password = password;}

getFriends(){return this._friends;}
setFriends(friends:Array<User>){this._friends = friends;}

getMessages(){return this._messages;}
setMessages(messages : Array<Message>){this._messages = messages;}

}
