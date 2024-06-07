CREATE TABLE SampleData (
    RowID INT PRIMARY KEY,
    DataValue VARCHAR(50)
);


INSERT INTO SampleData (RowID, DataValue) VALUES
(1, 'Value1'),
(2, 'Value2'),
(3, 'Value3'),
(4, 'Value4'),
(5, 'Value5');


SELECT *
FROM SampleData
WHERE RowID % 2 = 1;
