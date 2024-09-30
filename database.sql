CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    gremio VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE categories (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE options (
    id INT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE votes (
    id INT PRIMARY KEY,
    user_id INT,
    option_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (option_id) REFERENCES options(id)
);
