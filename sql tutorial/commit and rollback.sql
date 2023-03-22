use wscube;
select * from students;
commit;

update students set email="bh@gmail.com" where id=5;
rollback;

delete from students where id=7; 
commit;
rollback;