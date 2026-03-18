-- insert Employeelevels
INSERT INTO EmployeeLevels (level) VALUES ('Boss');
INSERT INTO EmployeeLevels (level) VALUES ('floorworker');

-- insert Warehouses
INSERT INTO WareHouses (city, inventory_limit) VALUES ('Lyngby', 5000);
INSERT INTO WareHouses (city, inventory_limit) VALUES ('Ballerup', 3000);
INSERT INTO WareHouses (city, inventory_limit) VALUES ('Skovlunde', 2500);

-- insert Employee 

-- insert Categories 
INSERT INTO Categories (category_id, category) VALUES ('1', 'Electronics');
INSERT INTO Categories (category_id, category) VALUES ('2', 'Smart Home');
INSERT INTO Categories (category_id, category) VALUES ('3', 'Computer Accessories');
INSERT INTO Categories (category_id, category) VALUES ('4', 'Office');
INSERT INTO Categories (category_id, category) VALUES ('5', 'Lifestyle');
INSERT INTO Categories (category_id, category) VALUES ('6', 'Accessories');
INSERT INTO Categories (category_id, category) VALUES ('7', 'Smart Devices');
INSERT INTO Categories (category_id, category) VALUES ('8', 'Gaming');
INSERT INTO Categories (category_id, category) VALUES ('9', 'Travel');
INSERT INTO Categories (category_id, category) VALUES ('10', 'Home');
INSERT INTO Categories (category_id, category) VALUES ('11', 'Fitness');
INSERT INTO Categories (category_id, category) VALUES ('12', 'Tools');
INSERT INTO Categories (category_id, category) VALUES ('13', 'Outdoor');
INSERT INTO Categories (category_id, category) VALUES ('14', 'Cycling');
INSERT INTO Categories (category_id, category) VALUES ('15', 'Automotive');


-- insert Products 
INSERT INTO Products (name,description, price, category_id) VALUES ('Wireless Charging Pad', 'Fast wireless charging pad for Qi enabled devices', '24.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart LED Light Bulb', 'App controlled LED bulb with adjustable brightness', '14.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Mechanical Keyboard', 'Compact mechanical keyboard with tactile switches', '89.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Laptop Stand Aluminum', 'Adjustable aluminum stand that improves laptop ergonomics', '39.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Noise Cancelling Headphones', 'Over ear Bluetooth headphones with active noise cancellation', '129.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Minimalist Desk Lamp', 'LED desk lamp with touch brightness control', '34.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Stainless Steel Water Bottle', 'Insulated bottle that keeps drinks cold or hot for hours', '19.99', '5');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable Power Bank 20000mAh', 'High capacity portable battery with fast charging', '44.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Cable Organizer Case', 'Travel pouch for storing cables and chargers', '17.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Bluetooth Tracker Tag', 'Small tracker to locate keys bags and valuables', '21.99', '7');
INSERT INTO Products (name,description, price, category_id) VALUES ('Ergonomic Wireless Mouse', 'Comfortable wireless mouse with adjustable DPI', '29.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Monitor Light Bar', 'LED monitor mounted light that reduces eye strain', '49.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Desk Mat XL', 'Large desk mat with smooth surface for mouse and keyboard', '22.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('USB C Hub 7 in 1', 'Multiport USB C hub with HDMI and SD card reader', '54.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Adjustable Phone Stand', 'Foldable aluminum phone stand for desk use', '12.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Gaming Mouse Pad Extended', 'Large mouse pad optimized for gaming precision', '18.99', '8');
INSERT INTO Products (name,description, price, category_id) VALUES ('USB C Charging Cable 2m', 'Durable braided USB C cable for fast charging', '9.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Wireless Earbuds', 'Bluetooth earbuds with charging case and clear audio', '79.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Plug WiFi', 'Control home devices remotely with smartphone app', '16.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Laptop Sleeve 13 inch', 'Protective sleeve for laptops up to 13 inches', '21.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Laptop Sleeve 15 inch', 'Protective sleeve for laptops up to 15 inches', '23.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable SSD 1TB', 'High speed external solid state drive for storage', '119.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable SSD 2TB', 'Large capacity external SSD with USB C connection', '199.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Mechanical Keyboard Wrist Rest', 'Soft ergonomic wrist support for keyboards', '19.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Webcam Full HD', '1080p webcam ideal for video meetings and streaming', '49.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Tripod Phone Mount', 'Adjustable tripod stand for smartphones', '27.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Ring Light 10 inch', 'LED ring light for video and photography lighting', '32.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Wireless Presentation Clicker', 'Remote clicker for presentations with laser pointer', '18.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Notebook A5 Minimal', 'Minimalist lined notebook for notes and journaling', '8.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Gel Pen Set 10 pack', 'Smooth writing gel pens in assorted colors', '12.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Desk Organizer Tray', 'Simple tray organizer for pens and small items', '14.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Desk Cable Clips Set', 'Clips to keep desk cables organized and tidy', '7.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Magnetic Whiteboard Small', 'Small magnetic board for notes and reminders', '19.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Whiteboard Marker Set', 'Set of colorful dry erase markers', '11.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable Laptop Cooling Pad', 'USB powered cooling pad for laptops', '29.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Adjustable Tablet Stand', 'Stable stand compatible with most tablets', '16.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Tablet Stylus Pen', 'Universal stylus pen for touchscreens', '9.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Desk Clock Digital', 'Minimal digital clock with LED display', '24.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Alarm Clock', 'Alarm clock with sunrise light feature', '39.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Temperature Sensor', 'Monitor room temperature through mobile app', '29.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('USB Desk Fan', 'Small USB powered fan for desk cooling', '15.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('LED Strip Lights 5m', 'Color changing LED strip lights with remote', '22.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('HDMI Cable 2m', 'High speed HDMI cable for monitors and TVs', '10.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Ethernet Cable 5m', 'Cat6 cable for stable wired internet connection', '11.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable Projector Mini', 'Compact projector for movies and presentations', '149.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Wireless Charger Stand', 'Vertical wireless charging stand for phones', '27.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Travel Adapter Universal', 'Universal power adapter for international travel', '25.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Backpack Tech Organizer', 'Backpack with compartments for gadgets', '69.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Minimal Laptop Backpack', 'Lightweight backpack designed for laptops', '59.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Travel Packing Cubes Set', 'Organize luggage with packing cubes', '19.99', '9');
INSERT INTO Products (name,description, price, category_id) VALUES ('Insulated Coffee Mug', 'Reusable mug that keeps coffee hot longer', '17.99', '5');
INSERT INTO Products (name,description, price, category_id) VALUES ('Electric Kettle 1.7L', 'Fast boiling electric kettle with auto shutoff', '39.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Coffee Grinder Electric', 'Electric grinder for fresh coffee beans', '34.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Scale Body Weight', 'Digital scale that syncs with health apps', '49.99', '7');
INSERT INTO Products (name,description, price, category_id) VALUES ('Fitness Tracker Watch', 'Basic fitness tracker with heart rate monitor', '79.99', '7');
INSERT INTO Products (name,description, price, category_id) VALUES ('Yoga Mat Non Slip', 'Comfortable exercise mat with non slip surface', '24.99', '11');
INSERT INTO Products (name,description, price, category_id) VALUES ('Resistance Bands Set', 'Workout bands for strength training', '19.99', '11');
INSERT INTO Products (name,description, price, category_id) VALUES ('Foam Roller Exercise', 'Muscle recovery foam roller for workouts', '21.99', '11');
INSERT INTO Products (name,description, price, category_id) VALUES ('Jump Rope Fitness', 'Adjustable speed rope for cardio workouts', '12.99', '11');
INSERT INTO Products (name,description, price, category_id) VALUES ('Reusable Shopping Bag Foldable', 'Compact foldable bag for groceries', '6.99', '5');
INSERT INTO Products (name,description, price, category_id) VALUES ('Stainless Steel Lunch Box', 'Reusable lunch container with compartments', '18.99', '5');
INSERT INTO Products (name,description, price, category_id) VALUES ('Kitchen Timer Digital', 'Simple timer for cooking and baking', '9.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Cutting Board Bamboo', 'Durable bamboo board for food preparation', '16.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Knife Sharpener Manual', 'Manual sharpener for kitchen knives', '14.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('LED Flashlight Rechargeable', 'Bright flashlight with USB charging', '22.99', '12');
INSERT INTO Products (name,description, price, category_id) VALUES ('Multi Tool Pocket', 'Compact multi tool for everyday tasks', '24.99', '12');
INSERT INTO Products (name,description, price, category_id) VALUES ('Screwdriver Set Precision', 'Precision screwdriver set for electronics repair', '19.99', '12');
INSERT INTO Products (name,description, price, category_id) VALUES ('Tape Measure 5m', 'Durable measuring tape with locking mechanism', '8.99', '12');
INSERT INTO Products (name,description, price, category_id) VALUES ('Wall Hook Set Adhesive', 'Adhesive hooks for hanging items on walls', '11.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Storage Basket Fabric', 'Soft fabric basket for storage organization', '13.99', '10');
INSERT INTO Products (name,description, price, category_id) VALUES ('Under Desk Cable Tray', 'Tray mounted under desk for cable management', '29.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Standing Desk Converter', 'Converter that turns desk into standing workstation', '139.99', '4');
INSERT INTO Products (name,description, price, category_id) VALUES ('Laptop Privacy Screen', 'Privacy filter that limits viewing angles', '34.99', '3');
INSERT INTO Products (name,description, price, category_id) VALUES ('Screen Cleaning Kit', 'Microfiber cloth and spray for screens', '9.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Keyboard Cleaning Gel', 'Gel cleaner for keyboards and electronics', '7.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Air Duster Spray', 'Compressed air for cleaning electronics', '6.99', '6');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Door Sensor', 'Detects door openings and sends alerts', '27.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Smart Motion Sensor', 'Motion detection sensor for smart homes', '29.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('WiFi Security Camera', 'Indoor camera with app monitoring', '79.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Video Doorbell WiFi', 'Doorbell camera with smartphone notifications', '119.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Outdoor Smart Plug', 'Weather resistant smart outlet for outdoors', '34.99', '2');
INSERT INTO Products (name,description, price, category_id) VALUES ('Solar Power Bank', 'Power bank that charges with solar energy', '39.99', '1');
INSERT INTO Products (name,description, price, category_id) VALUES ('Camping Lantern LED', 'Bright lantern for camping and emergencies', '21.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Thermal Blanket Emergency', 'Compact emergency survival blanket', '8.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Camping Cookware Set', 'Lightweight cookware set for camping trips', '34.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Portable Camping Stove', 'Small gas stove for outdoor cooking', '44.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Water Filter Bottle', 'Filtered water bottle for travel and hiking', '29.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Hiking Backpack 30L', 'Comfortable backpack for day hikes', '69.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Dry Bag Waterproof', 'Waterproof bag for protecting gear', '17.99', '13');
INSERT INTO Products (name,description, price, category_id) VALUES ('Bike Phone Mount', 'Secure phone mount for bicycles', '19.99', '14');
INSERT INTO Products (name,description, price, category_id) VALUES ('Bike Light Set USB', 'Rechargeable front and rear bike lights', '24.99', '14');
INSERT INTO Products (name,description, price, category_id) VALUES ('Bike Repair Tool Kit', 'Compact repair kit for bicycles', '21.99', '14');
INSERT INTO Products (name,description, price, category_id) VALUES ('Car Phone Charger Dual USB', 'Dual USB charger for car outlets', '12.99', '15');
INSERT INTO Products (name,description, price, category_id) VALUES ('Car Phone Mount Dashboard', 'Dashboard mount for smartphones in cars', '14.99', '15');
INSERT INTO Products (name,description, price, category_id) VALUES ('Car Vacuum Portable', 'Compact vacuum cleaner for car interiors', '39.99', '15');
INSERT INTO Products (name,description, price, category_id) VALUES ('Car Emergency Kit', 'Basic roadside emergency safety kit', '49.99', '15');

-- transactionstypes
INSERT INTO Transactiontypes (type_of_transaction) VALUES ('Solgt');
INSERT INTO Transactiontypes (type_of_transaction) VALUES ('retuneret');
INSERT INTO Transactiontypes (type_of_transaction) VALUES ('forsvundet');
INSERT INTO Transactiontypes (type_of_transaction) VALUES ('Varelevering');

INSERT INTO inventorytransactions
(product_id, change_amount, type_of_transaction, location, date_of_transaction, completed)
SELECT
    (1 + floor(random()*95))::int,

    CASE
        WHEN t = 1 THEN -(1 + floor(random()*5))::int  -- sold
        WHEN t = 2 THEN (1 + floor(random()*3))::int   -- returned
        WHEN t = 3 THEN -(1 + floor(random()*2))::int  -- lost
        ELSE (10 + floor(random()*40))::int            -- delivery
    END,

    t,

    (1 + floor(random()*3))::int,

    '2026-02-01'::timestamp +
    (floor(random()*60) || ' days')::interval +
    (floor(random()*24) || ' hours')::interval,

    CASE
        WHEN random() < 0.85 THEN TRUE   -- most transactions completed
        ELSE FALSE                       -- some pending
    END

FROM (
    SELECT
        generate_series(1,300),
        (1 + floor(random()*4))::int AS t
) AS transactions;


-- insert Order status 
INSERT INTO OrderStatus (status) VALUES ('Order lavet');
INSERT INTO OrderStatus (status) VALUES ('Pakket');
INSERT INTO OrderStatus (status) VALUES ('Afsendt');
INSERT INTO OrderStatus (status) VALUES ('Anulleret');
INSERT INTO OrderStatus (status) VALUES ('Retuneret');
INSERT INTO OrderStatus (status) VALUES ('Leveret');

-- insert Customers 

-- inset  Orders 

-- insert OrderItems 

-- insert Orderstatushistory 