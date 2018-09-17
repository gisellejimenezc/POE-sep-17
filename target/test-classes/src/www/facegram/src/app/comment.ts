import {Message} from './message';

export class Comment{

    private _date: Date = new Date();
    private _content : string;
    private _message : Message;
    private _likes : number;

    constructor(content : string){
        this._content = content;
    }

}

