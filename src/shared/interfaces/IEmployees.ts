export interface IEmployess {
    like: boolean
    id: string
    nome: string
    cargo:string
    imagem:string
}

export interface IRegisterEmployee {
    nome: string
    cargo: string
    imagem: string
    time?: string
}