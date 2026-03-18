class Order {
    public_id: string;
    customer_id: bigint; // Foreign Key
    creation_date_raw: number; // Unix timestamp
    creation_date_readable: string;
    created_by_employee_id: bigint; // Foreign Key

    constructor(public_id: string, customer_id: bigint, created_by_employee_id: bigint) {
        this.public_id = public_id;
        this.customer_id = customer_id;
        this.created_by_employee_id = created_by_employee_id;
        
        let d = new Date();
        this.creation_date_raw = d.valueOf();
        this.creation_date_readable = d.toUTCString().substring(0, 16);
    }
}