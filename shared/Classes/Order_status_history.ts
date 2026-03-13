class Order_status_history {
    history_id: bigint; // Primary Key
    order_number: bigint; // Foreign Key
    status: string;
    status_date_raw: number; // Unix timestamp
    status_date_readable: string;
    employee_id: bigint; // Foreign Key

    constructor(history_id: bigint, order_number: bigint, status = "Just created", employee_id: bigint) {
        this.history_id = history_id;
        this.order_number = order_number;
        this.status = status;
        this.employee_id = employee_id;
        
        let d = new Date();
        this.status_date_raw = d.valueOf();
        this.status_date_readable = d.toUTCString().substring(0, 16);
    }
}