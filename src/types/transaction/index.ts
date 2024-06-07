export enum CURRENCY { 
    USD = "USD",
    VND = "VND"
}
export type GenerateQRResponse = {
    code: string
    data: {
        qrCode: string
        qrDataURL: string
    }
    desc: string
}