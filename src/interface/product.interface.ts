export interface Description {
    name: string;
    amount: number
}

export interface Product extends Description {
    id: number,
    orderId: number | null
}
