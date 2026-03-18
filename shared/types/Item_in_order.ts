class Item_in_order {
    order_number: bigint; // Foreign/Primary Key
    product_id: bigint; // Foreign/Primary Key
    quantity: bigint;

    constructor(order_number: bigint, product_id: bigint, quantity = 0n) {
        this.order_number = order_number;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}