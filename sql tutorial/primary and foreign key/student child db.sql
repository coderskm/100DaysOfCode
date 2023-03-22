use wscube;

create table students(
id int not null unique auto_increment,
name varchar(100) not null,
email varchar(100) not null unique,
city_id int null,
primary key(id),
foreign key(city_id) references city(cid)
);

insert into students(name,email,city_id)
values
("bhargav","bhar@gmail.com",1),
("sunil","sun@gmail.com",2),
("ramesh","ram@gmail.com",3),
("amit","amit@gmail.com",4);

select * from students;