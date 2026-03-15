CREATE TRIGGER set_order_public_id
BEFORE INSERT ON Orders
FOR EACH ROW
EXECUTE FUNCTION generate_order_public_id();