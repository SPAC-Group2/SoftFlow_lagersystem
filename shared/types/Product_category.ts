class Product_category {
    category_id: bigint; // Primary Key
    category: string;

    constructor(category_id: bigint, category: string) {
        this.category_id = category_id;
        this.category = category;
    }
}