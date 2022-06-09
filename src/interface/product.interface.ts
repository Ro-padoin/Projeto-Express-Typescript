export interface Description {
  id?: number | null;
  name: string;
  amount: string;
}

export interface Product extends Description {
  id: number,
  orderId: number | null
}
