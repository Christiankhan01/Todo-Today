/*CREATE DATABASE jwt_todo; 


CREATE TABLE users(
   user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    user_name VARCHAR(255) NOT NULL, 
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCHAR(255) NOT NULL
); 

INSERT INTO users (user_name, user_email, user_password) VALUES ('Chris', 'ck@hotmail.com', '123'); 
*/
CREATE DATABASE authorizedtodolist; 

--users

CREATE TABLE users(
   user_id UUID DEFAULT uuid_generate_v4(), 
   user_name VARCHAR(255) NOT NULL, 
   user_email VARCHAR(255) NOT NULL UNIQUE, 
   user_password VARCHAR(255) NOT NULL, 
   PRIMARY KEY (user_id)
); 

--todos

CREATE TABLE todos(
    todo_id SERIAL, 
    user_id UUID, 
    description VARCHAR(255) NOT NULL, 
    PRIMARY KEY (todo_id), 
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    
); 

--fake users

insert into users(user_name, user_email, user_password) values ('Anthony', 'Anthony@hotmail.com','Ialmost4gotu!' ); 

--fake todos data
insert into todos(user_id, description ) values ('d85e371b-51f5-40e0-8b2e-216d87a7510f', 'Build portfolio!'); 