class Order {
    public_id: string;
    customer_id: bigint; // Foreign Key
    creation_date_raw: bigint; // Unix timestamp
    creation_date_readable: string; //TODO: Make a function to convert the raw timestamp to a readable date
    created_by_employee_id: bigint; // Foreign Key

    constructor(public_id: string, customer_id: bigint, creation_date_raw: bigint, creation_date_readable: string, created_by_employee_id: bigint) {
        this.public_id = public_id;
        this.customer_id = customer_id;
        this.creation_date_raw = creation_date_raw;
        this.creation_date_readable = creation_date_readable;
        this.created_by_employee_id = created_by_employee_id;
    }
}