class Inventory_transaction {
    transaction_id: bigint; // Primary Key
    product_id: bigint; // Foreign Key
    inventory_change_amount: bigint;
    type_id: number; // Foreign Key
    is_done: boolean;
    location_warehouse_id: number; // Foreign Key
    transactions_date_raw: bigint; // Unix timestamp
    transactions_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    employee_id: bigint; // Foreign Key
}