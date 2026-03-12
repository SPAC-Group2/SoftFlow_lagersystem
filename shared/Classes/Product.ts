class Product {
    public_id: string;
    name: string;
    description: string;
    price: number;
    stock: bigint;
    currency_name = "Euro"
    currency_symbol = "€"
    category_id: bigint; // Foreign Key
}