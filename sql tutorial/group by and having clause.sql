use wscube;

select city_id, city.name, count(city_id) as total from students inner join city
 on students.city_id = city.cid
 group by(city_id)
 having count(city_id) >=2;