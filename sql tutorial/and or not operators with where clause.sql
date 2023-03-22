insert into students
(id,name,email,age) values
(3,'sonu','sonu@gmail.com',64),
(4,'sunil','sunil@gmail.com',24),
(5,'sumit','sumit@gmail.com',25),
(6,'ankit','ankit@gmail.com',43),
(7,'harsh','harsh@gmail.com',76);

select * from students where age>=18 and age<=25;

select * from students where age<=18 OR age<=60;

select * from students where not age<30;
