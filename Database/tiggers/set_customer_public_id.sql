CREATE TRIGGER set_customer_public_id
BEFORE INSERT ON Customers
FOR EACH ROW
EXECUTE FUNCTION generate_customer_public_id();