use wscube;
select * from students;
select * from city;

select name from students where city_id=(select cid from city where name="noida");

select name from students where exists (select cid from city where name="noida");

select name from students where not exists (select cid from city where name="agra");


