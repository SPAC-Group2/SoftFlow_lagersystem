class Inventory_transaction {
    transaction_id: bigint; // Primary Key
    product_id: bigint; // Foreign Key
    inventory_change_amount: bigint;
    type_id: number; // Foreign Key
    is_done: boolean;
    transaction_date_raw: number; // Unix timestamp
    transaction_date_readable: string;
    employee_id: bigint; // Foreign Key

    constructor(transaction_id: bigint, product_id: bigint, inventory_change_amount = 0n, type_id: number, is_done = false, employee_id: bigint) {
        this.transaction_id = transaction_id;
        this.product_id = product_id;
        this.inventory_change_amount = inventory_change_amount;
        this.type_id = type_id;
        this.is_done = is_done;
        this.employee_id = employee_id;
        
        let d = new Date();
        this.transaction_date_raw = d.valueOf();
        this.transaction_date_readable = d.toUTCString().substring(0, 16);
    }
}