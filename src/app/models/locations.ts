export interface FechAllLocationResponse {
    count:number,
    next: null,
    previous: null,
    results: SmallLocation[];
}

export interface SmallLocation {
    name: string,
    url: string
}


export interface Location{
    id: string,
    name: string
}