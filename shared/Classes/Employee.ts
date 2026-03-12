class Employee {
    employee_id: bigint; // Primary Key
    username: string;
    name: string;
    level: string; // Foreign Key
    password_hash: string;
    location_warehouse_id: number; // Foreign Key
}