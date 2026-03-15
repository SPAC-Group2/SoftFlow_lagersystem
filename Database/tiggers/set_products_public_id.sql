CREATE TRIGGER set_products_public_id
BEFORE INSERT ON Products
FOR EACH ROW
EXECUTE FUNCTION generate_Products_public_id();