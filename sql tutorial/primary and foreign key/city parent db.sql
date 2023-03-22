use wscube;

create table city(
cid int not null auto_increment,
name varchar(100) not null unique,
primary key(cid)
);

insert into city(name)values("Meerut"),("Noida"),("gurgaon"),("pune");

select * from city;