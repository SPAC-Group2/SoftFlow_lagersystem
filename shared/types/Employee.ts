class Employee {
    employee_id: bigint; // Primary Key
    username: string;
    name: string;
    level: string; // Foreign Key
    password_hash: string;
    location_warehouse_id: number; // Foreign Key

    constructor(employee_id: bigint, username: string, name: string, level: string, password_hash: string, location_warehouse_id: number) {
        this.employee_id = employee_id;
        this.username = username;
        this.name = name;
        this.level = level;
        this.password_hash = password_hash;
        this.location_warehouse_id = location_warehouse_id;
    }
}