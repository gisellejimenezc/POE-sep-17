import {Message} from './message';

export class User{
    private _username : string;
    private _email : string;
    private _password : string;
    private _friends : Array<User> = [];
    private _messages : Array<Message> = [];

}
