export class Message{

    private _date: Date = new Date();
    private _content : string;
    private _likes : number;
    private _comments : Array<Comment> = [];

    constructor(content : string){
        this._content = content;
    }

}
