class Employee_level {
    level_id: bigint; // Primary Key
    level: string;

    constructor(level_id: bigint, level: string) {
        this.level_id = level_id;
        this.level = level;
    }
}