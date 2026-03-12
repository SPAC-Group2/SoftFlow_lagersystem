class Order_status_history {
    history_id: bigint; // Primary Key
    order_number: bigint; // Foreign Key
    status: string;
    status_date_raw: bigint; // Unix timestamp
    status_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    employee_id: bigint; // Foreign Key
}