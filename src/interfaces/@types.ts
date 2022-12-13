export interface IService {
    id: string,
    title: string,
    desc: string,
    img: string,
    img2: string
}


export interface IApp {
    services: IService[],
    getService: (id: string) => IService | void
}