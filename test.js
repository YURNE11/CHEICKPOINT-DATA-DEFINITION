/* créer le modèle relationnel */
CREATE TABLE Customer (

	customer_id VARCHAR(20) CONSTRAINT <primarykey>  PRIMARY KEY,
	name VARCHAR(20)  CONSTRAINT <nn> NOT NULL,
	tel NUMBER
	
)

CREATE TABLE Product (

	product_id VARCHAR(20) CONSTRAINT <primarykey>  PRIMARY KEY,
	name VARCHAR(20)  CONSTRAINT <nn> NOT NULL,
	price NUMBER  CONSTRAINT <signe_value> POSITIVE VALUE,
	
)

CREATE TABLE Orders (

    quantity NUMBER,
    total_ammount NUMBER,
    CONSTRAINT <foreign key> FOREIGN KEY (customer_id) REFERENCES  Customer (customer_id)
    CONSTRAINT <foreign key> FOREIGN KEY (product_id ) REFERENCES Product  (product_id)
	
)

/*Ajoutez une colonne Category (VARCHAR2(20)) à la table PRODUCT.   */
ALTER TABLE  Product  ADD Category  VARCHAR2(20);


/* Ajoutez une colonne OrderDate (DATE) à la table ORDERS qui a SYSDATE comme valeur par défaut. */

ALTER TABLE Orders ADD OrderDate ;
ALTER TABLE Orders MODIFY OrderDate SYSDATE;