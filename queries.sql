-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
p.ProductName,
c.CategoryName
from
Product as p
join
Category as c on p.CategoryId = c.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.Id, o.OrderDate, c.CompanyName
        FROM [Order] AS o
        JOIN Customer As c
        ON o.CustomerId = c.Id
        WHERE o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, p.QuantityPerUnit, o.OrderId, o.ProductId
FROM OrderDetail As o
JOIN Product As p on o.ProductId = p.Id 
Where o.OrderId = 10251
ORDER BY p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
Select o.Id, e.LastName as EmployeeLastName, c.CompanyName
From [Order] as o
join Customer as c on o.CustomerId = c.Id
join Employee as e on o.EmployeeId = e.Id
