class Order {
    public_id: string;
    customer_id: bigint; // Foreign Key
    creation_date_raw: bigint; // Unix timestamp
    creation_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    created_by_employee_id: bigint; // Foreign Key
}