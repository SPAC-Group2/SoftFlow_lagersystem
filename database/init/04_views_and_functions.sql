-- view for getting products
CREATE VIEW GetProducts AS
	SELECT p.public_id, p.name, p.description, p.price, COALESCE(SUM(i.change_amount), 0 ) AS Stock, c.category FROM Products p
	left JOIN Categories c ON p.category_id = c.category_id
	left JOIN Inventorytransactions i on p.product_id = i.product_id
	GROUP BY p.product_id, c.category_id;