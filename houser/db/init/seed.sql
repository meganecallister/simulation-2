DROP TABLE IF EXISTS Dummy;

CREATE TABLE Dummy
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    favColor VARCHAR(60),
    age INTEGER
);

INSERT INTO Dummy
    ( name, favColor, age )
    VALUES
        ( 'Elaine', 'Red', 52 ),
        ( 'Kurt', 'Blue', 53),
        ( 'Heather', 'White', 20 );