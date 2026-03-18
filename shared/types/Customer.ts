class Customer {
    public_id: string;
    first_name: string;
    last_name: string;
    email: string;
    location: string;

    constructor(public_id: string, first_name: string, last_name: string, email: string, location: string) {
        this.public_id = public_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.location = location;
    }
}