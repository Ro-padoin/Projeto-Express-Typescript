export interface Orders {
  id: number
  userId: number
}

export interface OrdersCreate {
  productsIds: number[]
}