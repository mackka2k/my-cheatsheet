
---[MYSQL]---
---
# 1. [INTRO]

**What is SQL?**
- **S** = Structured  
- **Q** = Query  
- **L** = Language  

**SQL is used for:**
- **Create**: Defining and creating new database objects (tables, indexes, views).
- **Retrieve**: Fetching data from the database using queries (e.g., `SELECT`).
- **Update**: Modifying existing data (e.g., `UPDATE` queries).
- **Delete**: Removing data from the database (e.g., `DELETE` queries).

---

**Two Types of Databases:**

1. **Relational (SQL-based)**:
   - Think of it like Excel rows & columns.
   - Structured data, stored in tables.
   - Tables can relate to each other through keys (e.g., foreign keys).

2. **Non-relational (NoSQL-based)**:
   - Data can be stored in flexible formats like JSON, graphs, or key-value pairs.
   - No strict table structure.

---

**Database Management System (DBMS):**
- A **DBMS** is a tool that provides a workspace to run and manage SQL statements.
- Examples: **MySQL**, **SQL Server**, **Oracle**, **PostgreSQL**.

---

# 2. [DATABASE]

**Creating and Using a Database**

```sql
CREATE DATABASE myDB;               -- Creates a database named "myDB"
USE myDB;                           -- Switches to the selected database "myDB"
```

**Dropping a Database**

```sql
DROP DATABASE myDB;                 -- Removes the database named "myDB"
```

**Altering Database Access**

```sql
ALTER DATABASE myDB READ ONLY = 1;  -- Sets the database to read-only mode
ALTER DATABASE myDB READ ONLY = 0;  -- Disables the read-only mode
```

# 3. [TABLES]

**Creating a Table**

```sql
CREATE TABLE employees (              -- Creates a table with specified columns and types
    employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5, 2),
    hire_date DATE
);
```

**Basic Table Operations**

```sql
SELECT * FROM employees;              -- Retrieves all rows from the table

RENAME TABLE employees TO workers;    -- Renames the table

DROP TABLE employees;                 -- Deletes the table
```

**Modifying a Table**

```sql
ALTER TABLE employees
ADD phone_number VARCHAR(15);         -- Adds a new column to the table
```

**Renaming a Column**

```sql
ALTER TABLE employees
RENAME COLUMN phone_number TO email;  -- Renames an existing column
```

**Modifying Column Type**

```sql
ALTER TABLE employees
MODIFY COLUMN email VARCHAR(100);     -- Changes the data type or size of the column
```

**Changing Column Position**

```sql
ALTER TABLE employees
MODIFY email VARCHAR(100) AFTER last_name;  -- Moves the column after another column
```

```sql
ALTER TABLE employees
MODIFY email VARCHAR(100) FIRST;           -- Moves the column to the first position
```

**Removing a Column**

```sql
ALTER TABLE employees
DROP COLUMN email;                     -- Removes a column from the table
```

---
# 4. [INSERT ROWS]

**Inserting a Single Row into a Table**

```sql
INSERT INTO employees                         
VALUES (1, "Eugene", "Krabs", 25.50, "2023-01-02");

SELECT * FROM employees;  -- Retrieves all rows from the "employees" table
```

**Inserting Multiple Rows into a Table**

```sql
INSERT INTO employees 
VALUES 
    (2, "Squidward", "Tentacles", 15.00, "2023-01-03"), 
    (3, "Spongebob", "Squarepants", 12.00, "2023-01-04"),
    (4, "Patrick", "Star", 11.00, "2023-01-05"),
    (5, "Sandy", "Cheeks", 14.00, "2023-01-06");

SELECT * FROM employees;  -- Retrieves all rows from the "employees" table
```

**Inserting a Row Without Specifying All Columns**

```sql
INSERT INTO employees (employee_id, first_name, last_name)
VALUES (6, 'Plankton', 'Bucket');

SELECT * FROM employees;  -- Retrieves all rows from the "employees" table
```

# 5. [SELECT]

**Getting Specific Data from a Table**

```sql
-- Retrieve specific columns
SELECT first_name, last_name FROM employees; 

-- Retrieve all columns for a specific employee
SELECT * FROM employees WHERE employee_id = 1; 

-- Retrieve all columns for employees with a specific first name
SELECT * FROM employees WHERE first_name = "Spongebob";

-- Retrieve all employees with hourly pay greater than or equal to 15
SELECT * FROM employees WHERE hourly_pay >= 15;

-- Retrieve all employees hired on or before a specific date
SELECT * FROM employees WHERE hire_date <= "2023-01-03";

-- Retrieve all employees except the one with employee_id = 1
SELECT * FROM employees WHERE employee_id != 1;

-- Retrieve all employees where hire_date is NULL
SELECT * FROM employees WHERE hire_date IS NULL;

-- Retrieve all employees where hire_date is NOT NULL
SELECT * FROM employees WHERE hire_date IS NOT NULL;
```
---
# 6. [UPDATE & DELETE]

**Updating Selected Elements in a Table**

```sql
-- Update the hourly pay and hire date for a specific employee
UPDATE employees
SET hourly_pay = 10.25, 
    hire_date = "2023-01-07"
WHERE employee_id = 6;
SELECT * FROM employees;

-- Set hire date to NULL for the employee with ID 6
UPDATE employees
SET hire_date = NULL
WHERE employee_id = 6;
SELECT * FROM employees;

-- Update hourly pay for all employees
UPDATE employees
SET hourly_pay = 10.25;
SELECT * FROM employees;
```

**Deleting Selected Elements in a Table**

```sql
-- Delete a specific employee from the table
DELETE FROM employees
WHERE employee_id = 6;
SELECT * FROM employees;
```

---
# 7. [AUTO COMMIT, COMMIT, ROLLBACK]

**Managing Transactions**

```sql
-- Disable auto-commit mode
SET AUTOCOMMIT = OFF;

-- Save the current state of the transaction (safe point)
COMMIT;  -- This creates a safe point in your transaction

-- Rollback to the last safe point if needed
ROLLBACK;  -- This reverts the changes made since the last COMMIT
```

---
# 8. [CURRENT_DATE & CURRENT_TIME]

**Working with Date and Time**

```sql
-- Create a table to store date and time values
CREATE TABLE test (
   my_date DATE,
   my_time TIME,
   my_datetime DATETIME
);

-- Insert the current date, time, and datetime into the table
INSERT INTO test 
VALUES (CURRENT_DATE(), CURRENT_TIME(), NOW());

-- Retrieve all records from the table
SELECT * FROM test;

-- Insert a new record with tomorrow's date
INSERT INTO test 
VALUES (CURRENT_DATE() + 1, CURRENT_TIME(), NOW());

-- Retrieve all records from the table again
SELECT * FROM test;
```
---
# 9. [UNIQUE]

**Ensuring Uniqueness in a Table**

```sql
-- Create a table where all product names must be unique
CREATE TABLE products (
   product_id INT,
   product_name VARCHAR(25) UNIQUE,
   price DECIMAL(4, 2)
);

-- If you forget to add UNIQUE constraint after creating the table
ALTER TABLE products
ADD CONSTRAINT UNIQUE(product_name);

-- Testing the UNIQUE constraint
INSERT INTO products
VALUES (100, "hamburger", 3.99),
       (101, "fries", 1.89),
       (102, "soda", 1.00),
       (103, "ice cream", 1.49),
       (104, "fries", 1.75); -- This will fail due to the UNIQUE constraint
```
---
# 10. [NOT NULL]

**Ensuring a Column is Not Null**

```sql
-- Create a table where the price should not be null
CREATE TABLE products (
   product_id INT,
   product_name VARCHAR(25),
   price DECIMAL(4, 2) NOT NULL
);

-- If you forget to add NOT NULL constraint after creating the table
ALTER TABLE products
MODIFY price DECIMAL(4, 2) NOT NULL;

-- Testing the NOT NULL constraint
INSERT INTO products
VALUES (104, "cookie", NULL); -- This will fail due to the NOT NULL constraint
```
---
# 11. [CHECK]

**Using CHECK Constraints in SQL**

```sql
-- Create a table with a CHECK constraint for hourly pay
CREATE TABLE employees (
   employee_id INT,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   hourly_pay DECIMAL(5, 2),
   hire_date DATE,
   CONSTRAINT chk_hourly_pay CHECK (hourly_pay >= 10.00) -- Ensures hourly pay is at least 10.00
);

-- If you need to add a CHECK constraint to an already existing table
ALTER TABLE employees
ADD CONSTRAINT chk_hourly_pay CHECK(hourly_pay >= 10.00);

-- Testing the CHECK constraint
INSERT INTO employees
VALUES (6, "Sheldon", "Plankton", 5.00, "2024-01-07"); -- This will fail due to the CHECK constraint

-- Dropping a CHECK constraint
ALTER TABLE employees
DROP CHECK chk_hourly_pay;
```

---
# 12. [DEFAULT]

**Setting Default Values in SQL Tables**

```sql
-- Create a table where the default value for price is 0.00
CREATE TABLE products (
   product_id INT,
   product_name VARCHAR(25),
   price DECIMAL(4, 2) DEFAULT 0 -- Sets default price to 0.00
);

-- If you need to add a default value to an already existing table
ALTER TABLE products
ALTER price SET DEFAULT 0; -- Sets the default price to 0.00

-- Testing the DEFAULT value
INSERT INTO products (product_id, product_name)
VALUES (104, "straw"),   -- price will be set to 0.00
       (105, "napkin"),  -- price will be set to 0.00
       (106, "fork"),     -- price will be set to 0.00
       (107, "spoon");    -- price will be set to 0.00

-- Retrieve all products to check their default prices
SELECT * FROM products;
```

---
# 13. [PRIMARY KEYS]

**Understanding Primary Keys in SQL Tables**

- **Definition**: A primary key is a field in a table that uniquely identifies each row/record in that table. A primary key must contain unique values and cannot contain NULL values.
- **Characteristics**:
  - You can have only **one primary key per table**.
  - A primary key is a combination of **UNIQUE** and **NOT NULL** constraints.

```sql
-- Create a table where transaction_id is the primary key
CREATE TABLE transactions (
   transaction_id INT PRIMARY KEY, -- transaction_id is the primary key
   amount DECIMAL(5, 2)
);

-- Retrieve all records from the transactions table
SELECT * FROM transactions;

-- If you need to add a primary key to an already existing table
ALTER TABLE transactions
ADD CONSTRAINT
PRIMARY KEY(transaction_id);

-- Retrieve all records from the transactions table
SELECT * FROM transactions;

-- Testing the primary key
INSERT INTO transactions
VALUES (1000, 4.99); -- Adding a new transaction

-- Retrieve all records from the transactions table to verify the insertion
SELECT * FROM transactions;
```

---
# 14. [AUTO_INCREMENT]

**Understanding AUTO_INCREMENT in SQL Tables**

- **Definition**: The `AUTO_INCREMENT` attribute is used to generate a unique identity for new rows in a table. This is typically used for primary keys, automatically incrementing the key by 1 whenever a new row is created.

```sql
-- Create a table where transaction_id is the primary key and uses AUTO_INCREMENT
CREATE TABLE transactions (
   transaction_id INT PRIMARY KEY AUTO_INCREMENT, -- transaction_id auto-increments
   amount DECIMAL(5, 2)
);

-- Retrieve all records from the transactions table
SELECT * FROM transactions;

-- If you need to change the AUTO_INCREMENT default value
ALTER TABLE transactions
AUTO_INCREMENT = 1000; -- Set the next value to start from 1000

-- Testing the auto-increment functionality
INSERT INTO transactions (amount)
VALUES (4.99); -- Inserting a new transaction

-- Retrieve all records from the transactions table to verify the insertion
SELECT * FROM transactions;
```
---
# 15. [FOREIGN KEYS]

**Understanding FOREIGN KEYS in SQL Tables**

- **Definition**: A foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table. It establishes a relationship between the two tables, linking them through the primary key of the referenced table.

```sql
-- Create a table for customers
CREATE TABLE customers (
   customer_id INT PRIMARY KEY AUTO_INCREMENT, -- customer_id as primary key with auto-increment
   first_name VARCHAR(50),
   last_name VARCHAR(50)
);

-- Retrieve all records from the customers table
SELECT * FROM customers;

-- Create a table for transactions that references the customers table
CREATE TABLE transactions (
   transaction_id INT PRIMARY KEY AUTO_INCREMENT, -- transaction_id as primary key with auto-increment
   amount DECIMAL(5, 2),
   customer_id INT,
   FOREIGN KEY(customer_id) REFERENCES customers(customer_id) -- Linking customer_id to customers table
);

-- Retrieve all records from the transactions table
SELECT * FROM transactions;

-- If you want to drop a foreign key constraint
ALTER TABLE transactions
DROP FOREIGN KEY transactions_ibfk_1; -- Specify the foreign key name to drop

-- Insert values into the customers table
INSERT INTO customers (first_name, last_name)
VALUES  ("Fred", "Fish"),
        ("Larry", "Lobster"), 
        ("Bubble", "Bass");

-- Retrieve all records from the customers table to verify the insertion
SELECT * FROM customers;
```

---
# 16. [JOINS]

**Understanding JOINS in SQL**

- **Definition**: JOINS are used to combine rows from two or more tables based on a related column between them, typically a foreign key. This allows you to retrieve data that is spread across multiple tables in a relational database.

```sql
-- Create the customers table
CREATE TABLE customers (
   customer_id INT PRIMARY KEY,     -- customer_id as primary key
   first_name VARCHAR(50),
   last_name VARCHAR(50)
);

-- Insert some sample data into the customers table
INSERT INTO customers (customer_id, first_name, last_name)
VALUES  (1, 'John', 'Doe'),
        (2, 'Jane', 'Smith'),
        (3, 'Alice', 'Johnson');

-- Create the orders table
CREATE TABLE orders (
   order_id INT PRIMARY KEY,         -- order_id as primary key
   order_date DATE,
   customer_id INT,                 -- Foreign key referencing customers
   total_amount DECIMAL(10, 2)
);

-- Insert some sample data into the orders table
INSERT INTO orders (order_id, order_date, customer_id, total_amount)
VALUES  (1, '2024-03-22', 1, 100.00),
        (2, '2024-03-23', 2, 150.00),
        (3, '2024-03-24', 3, 75.50);

-- Perform a simple INNER JOIN to retrieve orders along with customer details
SELECT 
    orders.order_id,
    orders.order_date,
    orders.total_amount,
    customers.first_name,
    customers.last_name
FROM 
    orders
INNER JOIN 
    customers ON orders.customer_id = customers.customer_id;
```

---
# 17. [FUNCTIONS]

**Using Functions in SQL**

Functions in SQL are used to perform calculations and manipulate data. Here’s how to use various aggregate functions and string functions in a SQL context.

```sql
-- Create the students table
CREATE TABLE students (
   student_id INT PRIMARY KEY,     -- student_id as primary key
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   score INT
);

-- Insert some sample data into the students table
INSERT INTO students (student_id, first_name, last_name, score)
VALUES  (1, 'John', 'Doe', 85),
        (2, 'Jane', 'Smith', 92),
        (3, 'Alice', 'Johnson', 78),
        (4, 'Bob', 'Brown', 95),
        (5, 'Emily', 'Davis', 88);

-- Calculate the maximum score
SELECT MAX(score) AS max_score FROM students;

-- Calculate the minimum score
SELECT MIN(score) AS min_score FROM students;

-- Calculate the average score
SELECT AVG(score) AS avg_score FROM students;

-- Concatenate first_name and last_name into a single column
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM students;

-- Count the number of students
SELECT COUNT(*) AS num_students FROM students;

-- Retrieve student details with the highest score
SELECT * FROM students WHERE score = (SELECT MAX(score) FROM students);
```

---
# 18. [AND OR NOT]

**Using Logical Operators: AND, OR, NOT, and BETWEEN**

Logical operators in SQL are used to filter records based on multiple conditions. Here’s how to use these operators effectively.

```sql
-- Create the employees table
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,   -- employee_id as primary key
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   salary DECIMAL(10, 2)
);

-- Insert some sample data into the employees table
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES  (1, 'John', 'Doe', 50000.00),
        (2, 'Jane', 'Smith', 60000.00),
        (3, 'Alice', 'Johnson', 55000.00),
        (4, 'Bob', 'Brown', 70000.00),
        (5, 'Emily', 'Davis', 48000.00);

-- Example queries using AND, OR, NOT, and BETWEEN

-- Select employees with a salary between $50,000 and $60,000
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 60000;

-- Select employees with a salary greater than $60,000 OR less than $50,000
SELECT * FROM employees WHERE salary > 60000 OR salary < 50000;

-- Select employees with a salary NOT between $50,000 and $60,000
SELECT * FROM employees WHERE salary NOT BETWEEN 50000 AND 60000;

-- Select employees with a salary between $50,000 and $60,000 AND whose first name is 'Alice'
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 60000 AND first_name = 'Alice';

-- Select employees with a salary less than $50,000 OR whose last name is 'Davis'
SELECT * FROM employees WHERE salary < 50000 OR last_name = 'Davis';
```
---
# 19. [WILDCARDS]

**Using Wildcards in SQL Queries**

Wildcards in SQL allow you to search for data that matches a specified pattern. Here's how to use them effectively.

```sql
-- Create the products table
CREATE TABLE products (
   product_id INT PRIMARY KEY,
   product_name VARCHAR(100),
   category VARCHAR(50)
);

-- Insert some sample data into the products table
INSERT INTO products (product_id, product_name, category)
VALUES  (1, 'Apple iPhone 13', 'Smartphones'),
        (2, 'Samsung Galaxy S21', 'Smartphones'),
        (3, 'HP Pavilion Laptop', 'Laptops'),
        (4, 'Dell XPS 13', 'Laptops'),
        (5, 'Logitech G502 Mouse', 'Peripherals');

-- Example queries using wildcard characters

-- Select products with names starting with 'Apple'
SELECT * FROM products WHERE product_name LIKE 'Apple%';

-- Select products with names containing 'Laptop' anywhere in the name
SELECT * FROM products WHERE product_name LIKE '%Laptop%';

-- Select products with names ending with 'Mouse'
SELECT * FROM products WHERE product_name LIKE '%Mouse';

-- Select products with names starting with 'S' followed by any character and ending with 's'
SELECT * FROM products WHERE product_name LIKE 'S_s%';

-- Select products with category names starting with 'Smart'
SELECT * FROM products WHERE category LIKE 'Smart%';

-- Select products with category names containing 'top' anywhere in the name
SELECT * FROM products WHERE category LIKE '%top%';
```
---
# 20. [ORDER BY]

**Using ORDER BY in SQL Queries**

The `ORDER BY` clause is used to sort the result set of a query by one or more columns. You can specify the sorting order as ascending (`ASC`) or descending (`DESC`).

```sql
-- Create the employees table
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   salary DECIMAL(10, 2)
);

-- Insert some sample data into the employees table
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES  (1, 'John', 'Doe', 50000.00),
        (2, 'Jane', 'Smith', 60000.00),
        (3, 'Alice', 'Johnson', 55000.00),
        (4, 'Bob', 'Brown', 70000.00),
        (5, 'Emily', 'Davis', 48000.00);

-- Example queries using ORDER BY clause

-- Select all employees and order them by salary in ascending order
SELECT * FROM employees ORDER BY salary;

-- Select all employees and order them by salary in descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Select all employees and order them by last name in ascending order and then by first name in descending order
SELECT * FROM employees ORDER BY last_name ASC, first_name DESC;
```

---
# 21. [LIMIT]

**Using LIMIT in SQL Queries**

The `LIMIT` clause is used to specify the maximum number of records to return in a query result. It is often used with the `ORDER BY` clause to control which rows are returned.

```sql
-- Create the employees table
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   salary DECIMAL(10, 2)
);

-- Insert some sample data into the employees table
INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES  (1, 'John', 'Doe', 50000.00),
        (2, 'Jane', 'Smith', 60000.00),
        (3, 'Alice', 'Johnson', 55000.00),
        (4, 'Bob', 'Brown', 70000.00),
        (5, 'Emily', 'Davis', 48000.00);

-- Example queries using LIMIT clause

-- Select the first 3 employees based on salary in descending order
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

-- Select the next 2 employees after skipping the first 2 based on salary in descending order
SELECT * FROM employees ORDER BY salary DESC LIMIT 2 OFFSET 2;
```
---
# 22. [UNION]

**Using UNION in SQL Queries**

The `UNION` operator is used to combine the results of two or more `SELECT` statements into a single result set. Each `SELECT` statement within the `UNION` must have the same number of columns in the result sets with similar data types.

```sql
-- Create the employees table
CREATE TABLE employees (
   id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   department VARCHAR(50)
);

-- Insert some sample data into the employees table
INSERT INTO employees (id, first_name, last_name, department)
VALUES  (1, 'John', 'Doe', 'HR'),
        (2, 'Jane', 'Smith', 'Marketing'),
        (3, 'Alice', 'Johnson', 'Finance');

-- Create the customers table
CREATE TABLE customers (
   id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   city VARCHAR(50)
);

-- Insert some sample data into the customers table
INSERT INTO customers (id, first_name, last_name, city)
VALUES  (101, 'Michael', 'Brown', 'New York'),
        (102, 'Emily', 'Davis', 'Los Angeles'),
        (103, 'David', 'Wilson', 'Chicago');

-- Example query using UNION operator
-- Retrieve a combined list of employees and customers with their names
SELECT id, first_name, last_name, department FROM employees
UNION
SELECT id, first_name, last_name, city FROM customers;
```
---
# 23. [SELF JOINS]

**Using Self Joins in SQL**

A **self join** is a regular join that joins a table to itself. It is useful for querying hierarchical data, such as organizational structures where employees report to managers.

```sql
-- Create the employees table
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,
   employee_name VARCHAR(50),
   manager_id INT
);

-- Insert some sample data into the employees table
INSERT INTO employees (employee_id, employee_name, manager_id)
VALUES  (1, 'John Doe', NULL),    -- CEO, no manager
        (2, 'Jane Smith', 1),     -- Reports to John Doe (CEO)
        (3, 'Alice Johnson', 2),  -- Reports to Jane Smith
        (4, 'Bob Brown', 1),      -- Reports to John Doe (CEO)
        (5, 'Emily Davis', 4);    -- Reports to Bob Brown

-- Example query using a self join to retrieve employees and their managers
SELECT e.employee_name AS employee, m.employee_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
```

---
# 24. [VIEW]

**Creating and Using Views in SQL**

A **view** is a virtual table that provides a way to represent a query as if it were a table. It can simplify complex queries and provide a level of abstraction from the underlying table structure.

```sql
-- VIEW IS A VIRTUAL TABLE

-- Create the employees table
CREATE TABLE employees (
   employee_id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   department VARCHAR(50)
);

-- Insert some sample data into the employees table
INSERT INTO employees (employee_id, first_name, last_name, department)
VALUES  (1, 'John', 'Doe', 'Sales'),
        (2, 'Jane', 'Smith', 'Engineering'),
        (3, 'Alice', 'Johnson', 'Sales'),
        (4, 'Bob', 'Brown', 'HR'),
        (5, 'Emily', 'Davis', 'Sales');

-- Create a view to show employees in the "Sales" department
CREATE VIEW sales_employees AS
SELECT * FROM employees WHERE department = 'Sales';

-- Query the view to retrieve sales employees
SELECT * FROM sales_employees;
```
---

# 25. [INDEXES]

**Understanding Indexes in SQL**

Indexes are database objects that improve the speed of data retrieval operations on a database table. They work like a reference guide, allowing the database to find data without scanning every row in the table.

```sql
-- INDEX (B-Tree data structure)
-- Indexes are used to find values within a specific column more quickly.
-- MySQL normally searches sequentially through a column.
-- The longer the column, the more expensive the operation is.
-- UPDATE takes more time, SELECT takes less time.

-- Create the customers table
CREATE TABLE customers (
   customer_id INT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   email VARCHAR(100)
);

-- Insert some sample data into the customers table
INSERT INTO customers (customer_id, first_name, last_name, email)
VALUES  (1, 'John', 'Doe', 'john@example.com'),
        (2, 'Jane', 'Smith', 'jane@example.com'),
        (3, 'Alice', 'Johnson', 'alice@example.com'),
        (4, 'Bob', 'Brown', 'bob@example.com'),
        (5, 'Emily', 'Davis', 'emily@example.com');

-- Create an index on the email column
CREATE INDEX idx_email ON customers (email);

-- Query the customers table using the index
SELECT * FROM customers WHERE email = 'alice@example.com';
```

  **Key Points:**
- **Performance Improvement**: Indexes significantly speed up SELECT queries by allowing the database to quickly locate rows.
- **Cost**: While indexes improve read performance, they add overhead to write operations (INSERT, UPDATE, DELETE), as the index must also be updated.
- **Type**: The default index type is usually a B-Tree, which is efficient for range queries and equality searches.

Using an index on the `email` column allows the database to efficiently find the customer with the email `'alice@example.com'` without scanning the entire table.

---
# 26. [SUBQUERIES]

**Understanding Subqueries in SQL**

Subqueries are queries nested within another SQL query. They allow for complex queries by breaking them down into smaller, manageable parts. Subqueries can be used in various clauses, such as SELECT, INSERT, UPDATE, DELETE, and WHERE.

```sql
-- Create the customers table
CREATE TABLE customers (
   customer_id INT PRIMARY KEY,
   customer_name VARCHAR(50),
   country VARCHAR(50)
);

-- Insert some sample data into the customers table
INSERT INTO customers (customer_id, customer_name, country)
VALUES  (1, 'John Doe', 'USA'),
        (2, 'Jane Smith', 'Canada'),
        (3, 'Alice Johnson', 'USA'),
        (4, 'Bob Brown', 'UK'),
        (5, 'Emily Davis', 'USA');

-- Create the orders table
CREATE TABLE orders (
   order_id INT PRIMARY KEY,
   order_date DATE,
   customer_id INT,
   amount DECIMAL(10, 2)
);

-- Insert some sample data into the orders table
INSERT INTO orders (order_id, order_date, customer_id, amount)
VALUES  (101, '2024-01-15', 1, 100.00),
        (102, '2024-02-20', 2, 150.00),
        (103, '2024-03-10', 3, 75.50),
        (104, '2024-04-05', 4, 200.00),
        (105, '2024-05-12', 5, 120.00);

-- Example query using a subquery in the WHERE clause
-- Retrieve orders placed by customers from the United States
SELECT * 
FROM orders 
WHERE customer_id IN (SELECT customer_id FROM customers WHERE country = 'USA');
```

**Key Points:**
- **Purpose**: Subqueries can help filter data based on the results of another query. In this case, we are filtering orders based on customers' country.
- **Performance**: While subqueries are powerful, they may impact performance, especially if the inner query returns a large dataset. In some cases, using JOINs can be more efficient.
- **Types of Subqueries**:
  - **Single-row subqueries**: Return a single value.
  - **Multi-row subqueries**: Return multiple values (as shown in the example with the IN clause).
---
# 27. [GROUP BY]

**Understanding GROUP BY in SQL**

The `GROUP BY` clause is used to aggregate data across multiple records and group the results by one or more columns. It is commonly used with aggregate functions such as `SUM()`, `MAX()`, `MIN()`, `AVG()`, and `COUNT()` to provide summarized results.

```sql
-- GROUP BY = aggregate all rows by a specific column
--            often used with aggregate functions
--            ex. SUM(), MAX(), MIN(), AVG(), COUNT().
=============================================================
-- Create the orders table
CREATE TABLE orders (
   order_id INT PRIMARY KEY,
   customer_id INT,
   order_date DATE,
   order_amount DECIMAL(10, 2)
);

-- Insert some sample data into the orders table
INSERT INTO orders (order_id, customer_id, order_date, order_amount)
VALUES  (1, 101, '2024-01-01', 100.00),
        (2, 102, '2024-01-02', 150.00),
        (3, 103, '2024-01-03', 200.00),
        (4, 101, '2024-01-04', 125.00),
        (5, 102, '2024-01-05', 175.00);

-- Example query using all aggregate functions
-- Calculate various aggregates for orders
SELECT 
    COUNT(*) AS total_orders,
    SUM(order_amount) AS total_sales,
    MAX(order_amount) AS max_order_amount,
    MIN(order_amount) AS min_order_amount,
    AVG(order_amount) AS avg_order_amount
FROM orders;
```
---

**Key Points:**
- **Purpose**: `GROUP BY` is used to group rows that have the same values in specified columns into summary rows. This is especially useful when you want to perform aggregate calculations on grouped data.
  
- **Aggregate Functions**:
  - **`COUNT()`**: Returns the number of rows in a group.
  - **`SUM()`**: Calculates the total sum of a numeric column.
  - **`MAX()`**: Finds the maximum value in a column.
  - **`MIN()`**: Finds the minimum value in a column.
  - **`AVG()`**: Calculates the average value of a numeric column.

- **Example Explanation**:
  - The example query calculates various aggregates for all orders in the `orders` table without grouping by a specific column. As a result, it provides the total number of orders, total sales amount, maximum order amount, minimum order amount, and average order amount for the entire dataset.

**Using GROUP BY with Aggregates**:
To use `GROUP BY` effectively, you can specify columns in the `GROUP BY` clause to obtain grouped results. For instance, if you want to know total sales per customer, you can modify the query as follows:

```sql
-- Calculate total sales per customer
SELECT 
    customer_id,
    COUNT(*) AS total_orders,
    SUM(order_amount) AS total_sales
FROM orders
GROUP BY customer_id;
```
---
# 28. [ROLLUP]

**Understanding ROLLUP in SQL**

The `ROLLUP` operator is an extension of the `GROUP BY` clause that allows you to create subtotals and grand totals within your result set. It generates additional summary rows for each group, culminating in a grand total row that aggregates all data.

```sql
-- ROLLUP, extension of the GROUP BY clause
-- produces another row and shows the GRAND TOTAL (super-aggregate value)
======================================================
-- Create the sales table
CREATE TABLE sales (
   transaction_id INT PRIMARY KEY,
   region VARCHAR(50),
   product_category VARCHAR(50),
   sales_amount DECIMAL(10, 2)
);

-- Insert some sample data into the sales table
INSERT INTO sales (transaction_id, region, product_category, sales_amount)
VALUES  (1, 'East', 'Electronics', 500.00),
        (2, 'East', 'Clothing', 300.00),
        (3, 'West', 'Electronics', 700.00),
        (4, 'West', 'Books', 200.00),
        (5, 'North', 'Clothing', 400.00),
        (6, 'North', 'Electronics', 600.00);

-- Example query using ROLLUP clause
-- Calculate subtotals and grand totals for sales by region and product category
SELECT 
    region,
    product_category,
    SUM(sales_amount) AS total_sales
FROM sales
GROUP BY region, product_category WITH ROLLUP;
```

---

**Key Points:**
- **Purpose**: The `ROLLUP` operator is used to provide aggregate summary values in a more hierarchical manner. It allows you to see subtotals at different levels of detail along with a grand total.

- **How it Works**: When using `ROLLUP`, SQL generates additional rows at each grouping level:
  - The first row for each group is the total for that group (e.g., total sales for each region and product category).
  - A subtotal for each region (but without a specific product category).
  - A grand total for all sales across all regions and product categories.

**Example Explanation**:
In the provided example, the query aggregates sales data by `region` and `product_category`. The result set will include:
- The total sales for each combination of region and product category.
- A subtotal for each region that sums the sales across all product categories within that region.
- A grand total row showing the total sales across all regions and categories.

**Result Example**:
The output might look like this:

| region | product_category | total_sales |
|--------|------------------|-------------|
| East   | Electronics      | 500.00      |
| East   | Clothing         | 300.00      |
| East   | NULL             | 800.00      |  -- Subtotal for East
| West   | Electronics      | 700.00      |
| West   | Books            | 200.00      |
| West   | NULL             | 900.00      |  -- Subtotal for West
| North  | Clothing         | 400.00      |
| North  | Electronics      | 600.00      |
| North  | NULL             | 1000.00     |  -- Subtotal for North
| NULL   | NULL             | 2700.00     |  -- Grand Total

**When to Use ROLLUP**:
- When you need a clear summary of data at different levels.
- When analyzing sales, financial data, or any dataset where understanding the hierarchy of totals is beneficial.
---

# 29. [ON DELETE]

**Understanding ON DELETE in SQL**

The `ON DELETE` clause in SQL defines the action that should be taken when a row in a parent table (e.g., `customers`) is deleted, and there are related rows in a child table (e.g., `orders`) with foreign key constraints. There are two common options for this clause:

- **ON DELETE SET NULL**: When a row in the parent table is deleted, the foreign key in the child table is set to `NULL`.
- **ON DELETE CASCADE**: When a row in the parent table is deleted, all related rows in the child table are also deleted.

Example of ON DELETE CASCADE

```sql
-- ON DELETE SET NULL = When a FK is deleted, replace FK with NULL
-- ON DELETE CASCADE = When a FK is deleted, delete the row.
==============================================================
-- Create the customers table
CREATE TABLE customers (
   customer_id INT PRIMARY KEY,
   customer_name VARCHAR(50)
);

-- Create the orders table with a foreign key constraint
CREATE TABLE orders (
   order_id INT PRIMARY KEY,
   order_date DATE,
   customer_id INT,
   FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

-- Insert some sample data into the customers table
INSERT INTO customers (customer_id, customer_name)
VALUES  (1, 'John Doe'),
        (2, 'Jane Smith');

-- Insert some sample data into the orders table
INSERT INTO orders (order_id, order_date, customer_id)
VALUES  (101, '2024-01-01', 1),
        (102, '2024-01-02', 2),
        (103, '2024-01-03', 1);

-- Delete a customer (and associated orders will be deleted due to CASCADE)
DELETE FROM customers WHERE customer_id = 1;

-- Verify that the associated orders have been deleted
SELECT * FROM orders;
```

**Key Points:**
- **Purpose**: The `ON DELETE` clause helps maintain referential integrity between related tables. It defines how deletions in one table affect related records in another table.

- **ON DELETE CASCADE**:
  - This option is useful when you want to ensure that there are no orphaned records in the child table. 
  - For instance, if a customer is deleted, all their associated orders should also be deleted automatically to avoid having orders that reference a non-existent customer.

**Example Explanation**:
In the provided example:
1. Two tables are created: `customers` and `orders`. The `orders` table has a foreign key referencing the `customers` table.
2. Sample data is inserted into both tables.
3. When a customer (with `customer_id = 1`) is deleted from the `customers` table, all orders related to that customer in the `orders` table are also deleted because of the `ON DELETE CASCADE` constraint.
4. The final query retrieves the remaining orders to confirm that the related orders have been deleted.

**Result Example**:
After executing the `DELETE` statement, if you run the `SELECT` query, the output might look like this:

| order_id | order_date | customer_id |
|----------|------------|--------------|
| 102      | 2024-01-02 | 2            |

The order with `order_id = 101` and the customer with `customer_id = 1` are no longer present in the `orders` table.

**When to Use ON DELETE**:
- Use **ON DELETE CASCADE** when you want automatic deletion of child records when a parent record is deleted.
- Use **ON DELETE SET NULL** if you want to keep child records but remove their association with the deleted parent record.
---
# 30. [STORED PROCEDURES]

**Understanding Stored Procedures in SQL**

A **stored procedure** is a precompiled collection of one or more SQL statements that can be executed as a single unit. Stored procedures are beneficial for encapsulating complex business logic, reducing code duplication, and enhancing performance.

Benefits of Using Stored Procedures:
- **Reusability**: Once created, stored procedures can be reused in multiple applications or queries.
- **Security**: They can restrict access to underlying data by allowing users to execute procedures without granting them direct access to the tables.
- **Performance**: Stored procedures are precompiled, which can improve execution speed compared to sending multiple individual queries to the database.

Example of Creating and Using a Stored Procedure

```sql
-- Stored procedure = prepared SQL code that you can save
-- great if there's a query that you write often
===================================================================
-- Create the users table
CREATE TABLE users (
   user_id INT PRIMARY KEY,
   username VARCHAR(50),
   email VARCHAR(100)
);

-- Insert some sample data into the users table
INSERT INTO users (user_id, username, email)
VALUES  (1, 'john_doe', 'john@example.com'),
        (2, 'jane_smith', 'jane@example.com'),
        (3, 'alice_johnson', 'alice@example.com'),
        (4, 'bob_brown', 'bob@example.com'),
        (5, 'emily_davis', 'emily@example.com');

-- Create the stored procedure to get user details by ID
DELIMITER //
CREATE PROCEDURE GetUserByID (IN userID INT)
BEGIN
    SELECT * FROM users WHERE user_id = userID;
END //
DELIMITER ;

-- Call the stored procedure to get user details by ID
CALL GetUserByID(3);
```

**Key Points**:
1. **Creating a Stored Procedure**:
   - The `DELIMITER` command is used to change the statement delimiter temporarily, allowing you to define a procedure without prematurely ending it with a semicolon.
   - The `CREATE PROCEDURE` statement defines a new stored procedure, followed by the parameters it accepts (in this case, `userID`).
   - The `BEGIN` and `END` keywords encapsulate the SQL statements that make up the procedure.

2. **Calling a Stored Procedure**:
   - To execute the stored procedure, use the `CALL` statement followed by the procedure name and its parameters.

**Result Example**:
When you call the stored procedure `GetUserByID(3)`, it executes the `SELECT` statement within the procedure, retrieving the details of the user with `user_id = 3`. The output will look like this:

| user_id | username        | email            |
|---------|------------------|------------------|
| 3       | alice_johnson    | alice@example.com |

**Use Cases for Stored Procedures**:
- **Data Validation**: Before inserting or updating records, validate input data.
- **Complex Queries**: Encapsulate complex queries that involve multiple joins and filters.
- **Batch Processing**: Perform bulk operations on data within the database.
- **Business Logic Implementation**: Implement application-specific logic directly in the database.
---
# 31. [TRIGGERS]

**Understanding Triggers in SQL**

A **trigger** is a database object that automatically executes a specified action in response to certain events on a particular table or view. Triggers can be set to activate on various events, such as `INSERT`, `UPDATE`, or `DELETE`, making them useful for enforcing business rules, maintaining audit trails, or ensuring data integrity.

Benefits of Using Triggers:
- **Automatic Action**: Triggers automatically perform actions in response to changes in data, eliminating the need for manual intervention.
- **Data Integrity**: They help maintain data integrity by enforcing business rules consistently.
- **Auditing**: Triggers can log changes to data, providing an audit trail for monitoring and compliance.

Example of Creating and Using a Trigger

```sql
-- Trigger = When an event happens, do something
--           ex. (INSERT, UPDATE, DELETE)
--           checks data, handles errors, and auditing tables.
============================================================

-- Create the employees table
CREATE TABLE employees (
   employee_id INT AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   hourly_pay DECIMAL(10, 2), -- For all employees
   salary DECIMAL(10, 2) -- Salary field for storing calculated salary
);

-- Insert some sample data into the employees table
INSERT INTO employees (first_name, last_name, hourly_pay) VALUES
('John', 'Doe', 20.00),  -- John Doe: Hourly employee with an hourly rate of $20
('Jane', 'Smith', 25.00);   -- Jane Smith: Hourly employee with an hourly rate of $25

-- Create the trigger to set salary based on hourly pay
CREATE TRIGGER SetSalaryOnHourlyPay
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.salary = NEW.hourly_pay * 40 * 52; -- Assuming 40 hours/week and 52 weeks/year

-- View updated employees table
SELECT * FROM employees;
```

**Key Points**:
1. **Creating a Trigger**:
   - The `CREATE TRIGGER` statement defines the trigger, specifying the timing (`BEFORE` or `AFTER`), the event (`INSERT`, `UPDATE`, or `DELETE`), and the table it applies to.
   - `FOR EACH ROW` indicates that the trigger should execute for each row affected by the triggering event.
   - The `SET NEW.salary = NEW.hourly_pay * 40 * 52` line defines the action to perform, calculating the `salary` based on the `hourly_pay` of the new employee.

2. **Automatic Execution**:
   - When a new employee is inserted into the `employees` table, the trigger automatically calculates and sets the `salary` field based on the `hourly_pay`.

**Result Example**:
After inserting the sample data and creating the trigger, if you run the query `SELECT * FROM employees;`, the output will look like this:

| employee_id | first_name | last_name | hourly_pay | salary   |
|-------------|------------|-----------|------------|----------|
| 1           | John       | Doe       | 20.00      | 41600.00 |
| 2           | Jane       | Smith     | 25.00      | 52000.00 |

**Use Cases for Triggers**:
- **Default Values**: Automatically calculate and set default values in columns based on other column values.
- **Cascading Actions**: Automatically delete or update related records in other tables.
- **Validation**: Enforce complex validation rules beyond what is possible with standard constraints.
- **Audit Trails**: Log changes to sensitive data, including who made the change and when.
---