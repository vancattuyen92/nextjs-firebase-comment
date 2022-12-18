export interface IComment {
    "avatar" : string;
    "time" : {
        "second" : number,
        "nanosecond" : number
    },
    "userName" : string;
    "message" : string;
}

export interface IPosts {
    "username" : string;
    "avatar" : string;
    "comments" : IComment[],
    "description" : string;
    "user" : string;
    "timestamp" : {
        "seconds" : number,
        "nanoseconds" : number,
    },
    id: string;
}

