-- Create EmployeeDetails table
CREATE TABLE EmployeeDetails (
    EmpId INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50)
);

-- Insert dummy data with some duplicates
INSERT INTO EmployeeDetails (EmpId, FirstName, LastName, Department) VALUES
(1, 'John', 'Doe', 'HR'),
(2, 'Jane', 'Doe', 'Finance'),
(3, 'John', 'Doe', 'HR'); 



SELECT FirstName, LastName, Department, COUNT(*) AS "Number of Duplicates"
FROM EmployeeDetails
GROUP BY FirstName, LastName, Department
HAVING COUNT(*) > 1;
