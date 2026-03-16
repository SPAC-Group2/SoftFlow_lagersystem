-- create Employeelevels table
CREATE TABLE EmployeeLevels(
id smallserial PRIMARY KEY,
level text NOT NULL
);
-- create Warehouses table
CREATE TABLE Warehouses(
warehouse_id serial PRIMARY KEY,
public_id text,
city text NOT NULL,
inventory_limit bigint
);
-- create Employee table
CREATE TABLE Employees(
employee_id bigserial PRIMARY KEY,
username text UNIQUE NOT NULL,
name text NOT NULL,
level smallint references EmployeeLevels(id),
password_hash text NOT NULL,
primary_location int references Warehouses(warehouse_id)
);
-- create Categories table
CREATE TABLE Categories(
category_id serial PRIMARY KEY,
cateory text NOT NULL
);
-- create Products table
CREATE TABLE Products(
product_id bigserial PRIMARY KEY,
public_id text UNIQUE,
name text NOT NULL,
description text,
price money NOT NULL,
category_id int references Categories(category_id)
);
-- create transactiontypes table
CREATE TABLE TransactionTypes(
type_id serial PRIMARY KEY,
type_of_transaction text NOT NULL
);

-- create inventory transactions table
CREATE TABLE InventoryTransactions(
transaction_id bigserial PRIMARY KEY,
product_id bigint NOT NULL references Products(product_id),
change_amount int NOT NULL,
type_of_transaction smallint NOT NULL references Transactiontypes(type_id),
completed bool NOT NULL,
location int NOT NULL references WareHouses(warehouse_id),
date_of_transaction timestamp default current_timestamp,
made_by bigint references Employees(employee_id)
);


-- create Order status table
CREATE TABLE OrderStatus(
status_id smallserial PRIMARY KEY,
status text NOT NULL
);
-- create Customers table
CREATE TABLE Customers (
customer_id bigserial PRIMARY KEY,
public_id text UNIQUE,
first_name text NOT NULL,
last_name text NOT NULL,
email text UNIQUE NOT NULL,
customer_location text
);
-- create Orders table
CREATE TABLE Orders(
order_id bigserial PRIMARY KEY,
public_id text,
customer_id bigint NOT NULL references customers(customer_id),
date_of_creation timestamp default current_timestamp,
created_by_employee bigint references Employees(employee_id)
);

-- create OrderItems table
CREATE TABLE OrderItems(
order_id bigint references Orders(order_id),
product_id bigint references Products(product_id),
quantity int NOT NULL,
PRIMARY KEY (order_id, product_id)
);

-- create Orderstatushistory table
CREATE TABLE OrderStatusHistory(
history_id bigserial PRIMARY KEY,
order_id bigint references Orders(order_id),
status_id smallint references OrderStatus(status_id),
status_date timestamp default current_timestamp,
employee_id bigint references Employees(employee_id)
);