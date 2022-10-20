export interface InvoiceItem {
  title: string;
  description?: string;
  quantity: number;
  price: number;
}

export enum Currency {
  USD = "$",
}
