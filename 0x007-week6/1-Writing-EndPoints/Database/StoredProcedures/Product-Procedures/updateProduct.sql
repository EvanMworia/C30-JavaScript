USE Inventory
GO
CREATE OR ALTER PROCEDURE updateProduct(@Id VARCHAR(255), @CategoryId VARCHAR(255), @Name VARCHAR(255))
AS
BEGIN
UPDATE Products SET Name=@Name WHERE Id=@Id
UPDATE Products SET CategoryId=@CategoryId WHERE Id=@Id
END