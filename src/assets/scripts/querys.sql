CREATE SEQUENCE tabla1_columna1_seq AS integer;
CREATE TABLE tabla1 (
    columna1 INTEGER DEFAULT nextval('tablename_colname_seq')
);