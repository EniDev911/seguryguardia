export type Service = {
    id: string,
    title: string,
    desc: string,
    img: string,
    img2: string
}


export interface IApp {
    services: Service[],
    getService: (id: string) => Service | void
}