class Transaction_type {
    type_id: number; // Primary Key
    type: string;

    constructor(type_id: number, type: string) {
        this.type_id = type_id;
        this.type = type;
    }
}