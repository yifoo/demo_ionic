DROP TABLE IF EXISTS `ji_products`;
CREATE TABLE ji_products(
	pid				INT PRIMARY KEY AUTO_INCREMENT,
	title			VARCHAR(36),
	subtitle	VARCHAR(36),
	aid				INT,
);