-- Function for making a public id for warehouses
CREATE OR REPLACE FUNCTION generate_warehouse_public_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.public_id IS NULL THEN
        NEW.public_id := 'WHS' || UPPER(LEFT(REPLACE(NEW.city,' ',''),3)) || NEW.warehouse_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for making public id on products
CREATE TRIGGER set_warehouse_public_id
BEFORE INSERT ON Warehouses
FOR EACH ROW
EXECUTE FUNCTION generate_warehouse_public_id();

-- Function for making a public id for customers
CREATE OR REPLACE FUNCTION generate_customer_public_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.public_id IS NULL THEN
        NEW.public_id := 'CUS' || ENCODE(CONVERT_TO(NEW.customer_id:: text, 'UTF-8'), 'base64');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for making public id on customers
CREATE TRIGGER set_customer_public_id
BEFORE INSERT ON Customers
FOR EACH ROW
EXECUTE FUNCTION generate_customer_public_id();



-- Function for making a public id for products
CREATE OR REPLACE FUNCTION generate_Products_public_id()
RETURNS TRIGGER AS $$
DECLARE
	cat text;
BEGIN
    IF NEW.public_id IS NULL THEN
		SELECT categories.cateory
        INTO cat
        FROM Categories
        WHERE category_id = NEW.category_id;
        NEW.public_id := 'PRO' || LEFT(cat,3) || NEW.product_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



-- Trigger for making public id on products
CREATE TRIGGER set_products_public_id
BEFORE INSERT ON Products
FOR EACH ROW
EXECUTE FUNCTION generate_Products_public_id();


-- Function for making a public id for products
CREATE OR REPLACE FUNCTION generate_order_public_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.public_id IS NULL THEN
        NEW.public_id := 'ORD' || ENCODE(CONVERT_TO(NEW.order_id:: text, 'UTF-8'), 'base64');
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for making public id on products
CREATE TRIGGER set_order_public_id
BEFORE INSERT ON Orders
FOR EACH ROW
EXECUTE FUNCTION generate_order_public_id();
