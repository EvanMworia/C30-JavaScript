
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);


CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    EmployeeID INT,
    SaleAmount DECIMAL(10, 2),
    SaleDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);


INSERT INTO Employees (EmployeeID, FirstName, LastName) VALUES
(1, 'Kegonyi', 'Wamatatu'),
(2, 'Bongo', 'Lala'),
(3, 'Sijauza', 'Kitu');


INSERT INTO Sales (SaleID, EmployeeID, SaleAmount, SaleDate) VALUES
(1, 1, 100.00, '2023-01-01'),
(2, 1, 200.00, '2023-01-02'),
(3, 2, 150.00, '2023-01-03'),
(4, 3, 0.00, '2023-01-03');


--accounts for employees with no sale record in the sales table ama present in the sales table but amount totals to zero
SELECT e.EmployeeID, e.FirstName, e.LastName
FROM Employees e
LEFT JOIN Sales s ON e.EmployeeID = s.EmployeeID
GROUP BY e.EmployeeID, e.FirstName, e.LastName
HAVING SUM(s.SaleAmount) = 0 OR SUM(s.SaleAmount) IS NULL;
