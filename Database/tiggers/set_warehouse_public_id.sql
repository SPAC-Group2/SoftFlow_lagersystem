CREATE TRIGGER set_warehouse_public_id
BEFORE INSERT ON Warehouses
FOR EACH ROW
EXECUTE FUNCTION generate_warehouse_public_id();