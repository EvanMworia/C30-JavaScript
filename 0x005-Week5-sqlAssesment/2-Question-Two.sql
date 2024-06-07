CREATE PROCEDURE InsertOrUpdateEmployee (
    @EmployeeID INT,
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50)
)
AS
BEGIN
    
    IF EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = @EmployeeID)
    BEGIN
        
        UPDATE Employees
        SET FirstName = @FirstName, LastName = @LastName
        WHERE EmployeeID = @EmployeeID;
    END
    ELSE
    BEGIN
        
        INSERT INTO Employees (EmployeeID, FirstName, LastName)
        VALUES (@EmployeeID, @FirstName, @LastName);
    END
END;
