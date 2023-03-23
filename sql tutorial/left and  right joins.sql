use wscube;

select * from city;
select * from students;

select * from city left join students on city.cid = students.city_id;

select * from city right join students on city.cid = students.city_id;
