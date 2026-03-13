class Order_status_history {
    history_id: bigint; // Primary Key
    order_number: bigint; // Foreign Key
    status: string;
    status_date_raw: bigint; // Unix timestamp
    status_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    employee_id: bigint; // Foreign Key

    constructor(history_id: bigint, order_number: bigint, status = "Just created", status_date_raw: bigint, status_date_readable: string, employee_id: bigint) {
        this.history_id = history_id;
        this.order_number = order_number;
        this.status = status;
        this.status_date_raw = status_date_raw;
        this.status_date_readable = status_date_readable;
        this.employee_id = employee_id;
    }
}