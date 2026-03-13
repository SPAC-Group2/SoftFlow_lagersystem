class Inventory_transaction {
    transaction_id: bigint; // Primary Key
    product_id: bigint; // Foreign Key
    inventory_change_amount: bigint;
    type_id: number; // Foreign Key
    is_done: boolean;
    transactions_date_raw: bigint; // Unix timestamp
    transactions_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    employee_id: bigint; // Foreign Key

    constructor(transaction_id: bigint, product_id: bigint, inventory_change_amount = 0n, type_id: number, is_done = false, transaction_date_raw: bigint, transaction_date_readable: string, employee_id: bigint) {
        this.transaction_id = transaction_id;
        this.product_id = product_id;
        this.inventory_change_amount = inventory_change_amount;
        this.type_id = type_id;
        this.is_done = is_done;
        this.transactions_date_raw = transaction_date_raw;
        this.transactions_date_readable = transaction_date_readable;
        this.employee_id = employee_id;
    }
}