class Warehouse {
    public_id: string;
    city: string;
    inventory_limit: bigint;

    constructor(public_id: string, city: string, inventory_limit: bigint) {
        this.public_id = public_id;
        this.city = city;
        this.inventory_limit = inventory_limit;
    }
}